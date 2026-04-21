pipeline {
    agent any

    options {
        timestamps()
        ansiColor('xterm')
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '20'))
        disableConcurrentBuilds()
    }

    environment {
        // Bun install location (used when Bun is auto-installed below)
        BUN_INSTALL = "${WORKSPACE}/.bun"
        PATH        = "${WORKSPACE}/.bun/bin:${env.PATH}"
        CI          = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                // Pulls the repo using the SCM config below
                checkout scm
            }
        }

        stage('Setup Bun') {
            steps {
                sh '''
                    set -e
                    if ! command -v bun >/dev/null 2>&1; then
                        echo "Bun not found — installing into ${BUN_INSTALL}"
                        curl -fsSL https://bun.sh/install | bash
                    fi
                    bun --version
                '''
            }
        }

        stage('Install') {
            steps {
                sh 'bun install --frozen-lockfile'
            }
        }

        stage('Lint') {
            steps {
                sh 'bun run lint'
            }
        }

        stage('Type-check') {
            steps {
                sh 'bunx tsc --noEmit'
            }
        }

        stage('Build') {
            steps {
                sh 'bun run build'
            }
            post {
                success {
                    archiveArtifacts artifacts: 'dist/**, .output/**',
                                     allowEmptyArchive: true,
                                     fingerprint: true
                }
            }
        }

        stage('SonarQube Scan') {
            when {
                expression {
                    // Only run when the Jenkins SonarQube plugin has a server
                    // named "SonarQube" configured AND a credential id
                    // "sonar-token" exists. Skip silently otherwise.
                    return env.SONAR_HOST_URL?.trim() || fileExists('sonar-project.properties')
                }
            }
            steps {
                script {
                    try {
                        withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
                            // Requires "SonarQube Scanner" tool named "SonarScanner"
                            // and a server config named "SonarQube" in Jenkins.
                            def scannerHome = tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                            withSonarQubeEnv('SonarQube') {
                                sh "${scannerHome}/bin/sonar-scanner -Dsonar.token=${SONAR_TOKEN}"
                            }
                        }
                    } catch (err) {
                        echo "SonarQube not configured in Jenkins — skipping. (${err.getMessage()})"
                    }
                }
            }
        }

        stage('Quality Gate') {
            when {
                expression { return env.SONAR_HOST_URL?.trim() }
            }
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: false
                }
            }
        }

        stage('Approve Deploy') {
            when { branch 'main' }
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
            }
        }

        stage('Deploy') {
            when { branch 'main' }
            steps {
                echo 'Deploy step — wire up your hosting provider here (Cloudflare, Vercel, etc.)'
                // Example for Cloudflare Workers:
                // withCredentials([
                //     string(credentialsId: 'cf-api-token',  variable: 'CLOUDFLARE_API_TOKEN'),
                //     string(credentialsId: 'cf-account-id', variable: 'CLOUDFLARE_ACCOUNT_ID')
                // ]) {
                //     sh 'bunx wrangler deploy'
                // }
            }
        }
    }

    post {
        success { echo "✅ Pipeline succeeded — build #${env.BUILD_NUMBER}" }
        failure { echo "❌ Pipeline failed — build #${env.BUILD_NUMBER}" }
        always  { cleanWs(deleteDirs: true, notFailBuild: true) }
    }
}
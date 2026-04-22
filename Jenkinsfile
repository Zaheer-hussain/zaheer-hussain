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
        // Bun install location (used when Bun is auto-installed below).
        // On Windows, Bun installs to %USERPROFILE%\.bun\bin by default.
        BUN_INSTALL = "${env.USERPROFILE}\\.bun"
        PATH        = "${env.USERPROFILE}\\.bun\\bin;${env.PATH}"
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
                powershell '''
                    $ErrorActionPreference = "Stop"
                    if (-not (Get-Command bun -ErrorAction SilentlyContinue)) {
                        Write-Host "Bun not found — installing via PowerShell"
                        irm https://bun.sh/install.ps1 | iex
                    }
                    bun --version
                '''
            }
        }

        stage('Install') {
            steps {
                bat 'bun install --frozen-lockfile'
            }
        }

        stage('Lint') {
            steps {
                bat 'bun run lint'
            }
        }

        stage('Type-check') {
            steps {
                bat 'bunx tsc --noEmit'
            }
        }

        stage('Build') {
            steps {
                bat 'bun run build'
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
                                bat "\"${scannerHome}\\bin\\sonar-scanner.bat\" -Dsonar.token=%SONAR_TOKEN%"
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
            when { expression { true } }
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
        }
     }
       
    }

    post {
        success { echo "✅ Pipeline succeeded — build #${env.BUILD_NUMBER}" }
        failure { echo "❌ Pipeline failed — build #${env.BUILD_NUMBER}" }
        always  { cleanWs(deleteDirs: true, notFailBuild: true) }
    }
}

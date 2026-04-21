# Jenkins Pipeline Setup

This project includes a `Jenkinsfile` that mirrors the GitHub Actions / GitLab CI flow:
**Checkout → Bun install → Lint → Type-check → Build → (optional) SonarQube → Manual approval → Deploy**.

SCM: `https://github.com/Zaheer-hussain/zaheer-hussain.git`

---

## 1. Create the Jenkins job

1. Open Jenkins → **New Item** → enter a name (e.g. `zaheer-portfolio`) → choose **Pipeline** → **OK**.
2. Under **Pipeline** section:
   - **Definition**: `Pipeline script from SCM`
   - **SCM**: `Git`
   - **Repository URL**: `https://github.com/Zaheer-hussain/zaheer-hussain.git`
   - **Credentials**: add a GitHub PAT credential if the repo is private (otherwise leave blank).
   - **Branch Specifier**: `*/main`
   - **Script Path**: `Jenkinsfile`
3. Save.

> Tip: For multi-branch / PR builds, use **Multibranch Pipeline** instead and point it at the same repo.

---

## 2. Required Jenkins plugins

Install via **Manage Jenkins → Plugins**:

- **Git plugin** (usually preinstalled)
- **Pipeline** + **Pipeline: Stage View**
- **AnsiColor**
- **Timestamper**
- **Credentials Binding**
- **Workspace Cleanup** (`cleanWs`)
- **SonarQube Scanner** _(only if you want the Sonar stage)_

---

## 3. Tools (Manage Jenkins → Tools)

- **Bun** is **not** required as a Jenkins-managed tool — the pipeline auto-installs it into the workspace if missing. If you prefer, install Bun on the agent and the pipeline will use that copy.
- **SonarQube Scanner** _(optional)_: add an installation named **`SonarScanner`** (this exact name is referenced in the Jenkinsfile).

---

## 4. Credentials (Manage Jenkins → Credentials → System → Global)

| ID              | Type        | Used for                     |
| --------------- | ----------- | ---------------------------- |
| `sonar-token`   | Secret text | SonarQube auth (optional)    |
| `cf-api-token`  | Secret text | Cloudflare deploy (optional) |
| `cf-account-id` | Secret text | Cloudflare deploy (optional) |

If `sonar-token` is missing, the SonarQube stage is skipped automatically — the pipeline does **not** fail.

---

## 5. SonarQube server (optional)

Go to **Manage Jenkins → System → SonarQube servers** and add a server named **`SonarQube`** with your server URL and select the `sonar-token` credential. The Jenkinsfile uses `withSonarQubeEnv('SonarQube')`.

The Sonar config is read from `sonar-project.properties` at the repo root.

---

## 6. Run it

1. Click **Build Now** on the job.
2. Watch the **Stage View** for progress.
3. On the `main` branch the pipeline pauses at **Approve Deploy** — click **Deploy** to proceed (or **Abort**).
4. The `dist/` and `.output/` folders are archived as build artifacts.

---

## 7. Wiring up the actual deploy

The `Deploy` stage currently just `echo`s. Uncomment and adapt the Cloudflare Wrangler block in `Jenkinsfile` (or replace it with your hosting provider's CLI — Vercel, Netlify, AWS, etc.) and add the matching Jenkins credentials.

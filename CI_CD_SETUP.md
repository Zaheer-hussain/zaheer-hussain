# CI/CD Pipeline Setup

This project ships with **GitHub Actions** and **GitLab CI** pipelines that:

1. Install dependencies (Bun)
2. Run lint + TypeScript type-check + build
3. Run a **SonarQube** code-quality scan with Quality Gate
4. **Deploy manually** (workflow_dispatch / `when: manual`)

---

## 1. GitHub Actions

Files: `.github/workflows/ci.yml`, `.github/workflows/deploy.yml`

### Required GitHub Secrets

Go to **Repo → Settings → Secrets and variables → Actions** and add:

| Secret                          | Where to get it                                   |
| ------------------------------- | ------------------------------------------------- |
| `SONAR_TOKEN`                   | SonarQube/SonarCloud → My Account → Security      |
| `SONAR_HOST_URL`                | e.g. `https://sonarcloud.io` or your Sonar server |
| `CLOUDFLARE_API_TOKEN`          | Cloudflare dashboard → My Profile → API Tokens    |
| `CLOUDFLARE_ACCOUNT_ID`         | Cloudflare dashboard → Workers & Pages            |
| `VITE_SUPABASE_URL`             | Lovable Cloud → backend                           |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Lovable Cloud → backend                           |
| `VITE_SUPABASE_PROJECT_ID`      | Lovable Cloud → backend                           |

### Manual approval

1. Go to **Repo → Settings → Environments → New environment** (`production`)
2. Enable **Required reviewers** → add yourself
3. Trigger the deploy from **Actions → Deploy (Manual) → Run workflow**

---

## 2. GitLab CI

File: `.gitlab-ci.yml`

### Required GitLab CI/CD Variables

Go to **Project → Settings → CI/CD → Variables** and add the same secrets as above (mark them as **Masked** + **Protected**).

### Manual deploy

The `deploy` job is `when: manual` — after the pipeline succeeds, click the ▶ button on the deploy job in the GitLab pipeline view.

---

## 3. SonarQube

File: `sonar-project.properties`

- Update `sonar.projectKey` to match the key from your SonarQube/SonarCloud project.
- The config excludes auto-generated files (`routeTree.gen.ts`, Supabase types, shadcn UI).
- The Quality Gate job will fail the pipeline if the gate is not passed.

---

## 4. Connect Lovable to GitHub

In the Lovable editor: **Connectors → GitHub → Connect project**, then **Create Repository**. Once synced, push these CI files and the pipelines will run automatically.

For GitLab: push the same repo to GitLab as a mirror (GitHub → Settings → Mirrors, or use `git remote add gitlab ...`).

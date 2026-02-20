# Grow Teach

## Repository

- **Clone**: https://github.com/Zuq13058/grow-teach.git  
- **Live (GitHub Pages)**: https://zuq13058.github.io/grow-teach/

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

**GitHub Pages**

1. In your repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **gh-pages** and folder **/ (root)**. Save.
4. Push to `main` (or run the "Deploy to GitHub Pages" workflow from the Actions tab). The workflow builds the app and pushes it to the `gh-pages` branch; the site will be at **https://zuq13058.github.io/grow-teach/**.

**If you see 404 for `/src/main.tsx`:** GitHub Pages is serving the wrong branch. Go to **Settings → Pages** and set **Branch** to **gh-pages** (not `main`). The repo root has the dev index; the built app is only on `gh-pages`.

To build for GitHub Pages locally (Linux/macOS): `VITE_BASE_PATH=/grow-teach/ npm run build:gh-pages`. On Windows: `set VITE_BASE_PATH=/grow-teach/ && npm run build:gh-pages`.

**Lovable**

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

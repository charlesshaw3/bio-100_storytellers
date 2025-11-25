# GitHub Pages Deployment Guide

This guide will help you deploy your AlphaFold website to GitHub Pages.

## Prerequisites

- Your code is in a GitHub repository
- You have push access to the repository

## Deployment Steps

### 1. Commit and Push the `docs` Folder

The `docs` folder contains your production build. Make sure it's committed to your repository:

```bash
git add docs/
git add vite.config.js
git commit -m "Add docs folder for GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/docs`
5. Click **Save**

### 3. Wait for Deployment

- GitHub will automatically deploy your site
- This usually takes 1-2 minutes
- Your site will be available at: `https://[your-username].github.io/BIO-100_Project/`

## Updating Your Site

Whenever you make changes to your website:

```bash
# Make your changes to the source code
# Then rebuild the docs folder
npm run build

# Commit and push the changes
git add .
git commit -m "Update website"
git push origin main
```

GitHub Pages will automatically redeploy your site with the new changes.

## Troubleshooting

### Base Path Issues

If your assets aren't loading correctly, verify that the `base` setting in `vite.config.js` matches your repository name:

```js
base: '/BIO-100_Project/',
```

### 404 Errors

Make sure you selected the `/docs` folder (not the root `/`) in GitHub Pages settings.

### CSS Not Loading

The `.nojekyll` file has been added to prevent GitHub from processing the site with Jekyll, which can interfere with Vite builds.

## Local Preview

To preview the production build locally before deploying:

```bash
npm run preview
```

This will serve the `docs` folder locally so you can test it.


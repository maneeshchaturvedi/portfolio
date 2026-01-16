# Maneesh Chaturvedi - Portfolio

Personal portfolio site built with React, Vite, and Tailwind CSS.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `portfolio` (or any name you prefer)
3. Keep it public
4. Don't initialize with README (we already have files)

### Step 2: Update Base Path

Edit `vite.config.js` and update the `base` to match your repo name:

```js
base: '/portfolio/',  // Change to your repo name
```

**Note:** If you're using a custom domain or deploying to `username.github.io` (without a repo name), set `base: '/'`

### Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically run on push

### Step 5: Access Your Site

After the workflow completes (~1-2 minutes), your site will be live at:

```
https://YOUR_USERNAME.github.io/portfolio/
```

## Custom Domain (Optional)

To use a custom domain like `maneesh.dev`:

1. Add a `CNAME` file in the `public/` folder with your domain:
   ```
   maneesh.dev
   ```

2. Update `vite.config.js`:
   ```js
   base: '/',
   ```

3. Configure DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IPs

4. In GitHub repo Settings → Pages → Custom domain, enter your domain

## Project Structure

```
portfolio-site/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deploy on push
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx             # Main portfolio component
│   ├── main.jsx            # React entry point
│   └── index.css           # Tailwind + custom styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

## License

MIT

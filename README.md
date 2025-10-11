# 🌐 Master SIE – ENS Meknès

Official website for the **Master Informatique et Systèmes Intelligents (SIE)** program at **ENS Meknès**.
This frontend-only project uses static JSON data to showcase courses, activities, and program information.

## 🧩 Technologies
- **React** + **Vite**
- **Tailwind CSS** for responsive design
- **Lucide Icons** for vector icons
- **Tidio Chatbot Assistant** for user interaction
- Fully **responsive** for mobile and desktop


## 🚀 Run locally
Clone the repository and run the development server:

```bash
git clone <https://github.com/BoubaAhmed/master-sie-ens-meknes>
cd <msie>
npm install
npm run dev
The website will be available at http://localhost:5173 by default.
```

## ⚡ Build for production
Generate optimized files for deployment:

``` bash
npm run build
```

This will create a dist/ folder containing static assets ready for deployment.

## 📂 Project structure
``` bash
src/
├─ assets/       # Images and media files
├─ components/   # React components
├─ data/         # JSON files for static data
└─ App.jsx       # Main app entry
dist/            # Production build (generated)
```

## 🌐 Deployment
Since this is a frontend-only project, you can deploy it on:

GitHub Pages

Netlify

Vercel

Static web hosts

For example, with Vercel:

``` bash
npm run build
vercel deploy
```

## 🛡️ Tips & Best Practices
Keep sensitive info out of the repo (no API keys in code)

Optimize images to reduce load times

Use semantic HTML and accessible components

Test on different screen sizes

Enable caching for faster load in production

## 📄 License
This project is MIT licensed.
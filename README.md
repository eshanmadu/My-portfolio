# Eshan's Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, interactive elements, and a professional design.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Interactive Navigation**: Active section highlighting and smooth scrolling
- **Modern UI**: Clean, professional design with glass morphism effects
- **Project Showcase**: Detailed project cards with technology tags
- **Skills Visualization**: Progress bars showing skill proficiency levels
- **Contact Section**: Multiple ways to get in touch
- **Mobile Menu**: Hamburger menu for mobile devices

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **Tailwind CSS 4** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3** - Custom animations and styling

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization Guide

### Personal Information

Update the following in `src/App.js`:

#### 1. Personal Details
```javascript
// Update your name throughout the component
<h1 className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
  Your Name
</h1>

// Update the hero section
<h2 className="text-5xl md:text-7xl font-bold mb-6">
  Hi, I'm <span className="text-green-400">Your Name</span>
</h2>
<p className="text-xl md:text-2xl text-gray-300 mb-8">
  Your Title | Your Specialization | Your Tagline
</p>
```

#### 2. About Section
```javascript
// Update the about text
<p className="text-lg text-gray-300 leading-relaxed mb-6">
  Your personal description here...
</p>

// Update quick facts
<div className="flex justify-between">
  <span className="text-gray-300">Education:</span>
  <span className="text-white">Your Degree</span>
</div>
```

#### 3. Projects
Replace the `projects` array with your own projects:

```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Detailed description of your project...",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project-name",
    live: "https://your-project.vercel.app",
    image: "🌱" // Choose an appropriate emoji
  },
  // Add more projects...
];
```

#### 4. Skills
Update the `skills` array with your skills and proficiency levels:

```javascript
const skills = [
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  // Add more skills...
];
```

#### 5. Contact Information
```javascript
// Update email
<a href="mailto:your-email@example.com" className="text-green-400 hover:text-green-300 transition-colors">
  your-email@example.com
</a>

// Update LinkedIn
<a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
  linkedin.com/in/your-profile
</a>

// Update GitHub
<a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
  github.com/yourusername
</a>
```

### Color Scheme

The portfolio uses a green color scheme. To change it, update the color classes throughout the component:

- Primary: `green-400`, `green-500`, `green-600`
- Background: `gray-900`, `gray-800`, `gray-700`
- Text: `gray-300`, `gray-400`

### Styling

#### Custom CSS
Add custom styles in `src/App.css`:

```css
/* Custom animations */
@keyframes yourAnimation {
  /* Your animation keyframes */
}

/* Custom classes */
.your-custom-class {
  /* Your styles */
}
```

#### Tailwind Configuration
Modify `tailwind.config.js` to add custom colors, fonts, or other utilities:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-color': '#your-color',
      },
      fontFamily: {
        'custom-font': ['Your Font', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🎯 Performance Optimization

- Lazy loading for images (if added)
- Optimized CSS with Tailwind's purge
- Efficient React components
- Smooth scrolling and animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
3. Deploy: `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy Coding! 🎉**

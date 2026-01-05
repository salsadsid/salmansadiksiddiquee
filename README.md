# Salman Sadik Siddiquee - Portfolio

A modern, professional developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI.

## 🚀 Features

- ✨ Modern and professional design
- 🌓 Light/Dark mode toggle with smooth transitions
- 📱 Fully responsive across all devices
- 🎨 Custom color theme with #21E6C1 accent color
- 🎭 Smooth animations powered by Framer Motion
- ⚡ Built with Next.js 15 for optimal performance
- 🎯 Type-safe with TypeScript
- 🎨 Styled with Tailwind CSS and Shadcn UI components
- 📦 Modular and scalable architecture

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Shadcn UI
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Icons:** Lucide React

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles and theme colors
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── navigation.tsx    # Navigation bar
│   ├── hero-section.tsx  # Hero section
│   ├── about-section.tsx # About section
│   ├── skills-section.tsx # Skills section
│   ├── experience-section.tsx # Experience section
│   ├── projects-education-section.tsx # Projects & Education
│   ├── contact-section.tsx # Contact section
│   ├── footer.tsx        # Footer
│   ├── theme-provider.tsx # Theme provider
│   └── theme-toggle.tsx  # Theme toggle button
├── lib/                  # Utility functions and data
│   ├── utils.ts         # Utility functions
│   └── data.ts          # Portfolio data (resume info)
└── public/              # Static assets
    └── placeholder-profile.jpg # Profile image
```

## 🎨 Customization

### Update Personal Information

Edit the data in `lib/data.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
};
```

### Update Color Theme

The color theme uses #21E6C1 (turquoise/cyan) as the primary color. To change it, modify the CSS variables in `app/globals.css`:

```css
:root {
  --primary: oklch(0.75 0.15 174); /* Your custom color */
}
```

### Replace Profile Image

Replace `public/placeholder-profile.jpg` with your actual profile photo (recommended size: 500x500px).

## 📄 Sections

1. **Hero** - Introduction with name, title, and CTA buttons
2. **About** - Personal background and achievements
3. **Skills** - Technical skills organized by category
4. **Experience** - Work experience with timeline
5. **Projects** - Featured projects
6. **Education** - Academic background and training
7. **Contact** - Contact information and CTA

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- Email: salman.dnj@gmail.com
- GitHub: [@salsadsid](https://github.com/salsadsid)
- LinkedIn: [salsadsid](https://linkedin.com/in/salsadsid)

---

Made with ❤️ using Next.js & TypeScript

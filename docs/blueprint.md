# **App Name**: Aura Portfolio

## Core Features:

- Hero Section: Displays a hero section with name, profession, location, and a profile picture. Serves as the landing point and introduction.
- About Section: Showcases a concise 'About Me' section with a bio, skills, and core values, providing a quick overview of the individual.
- Work Experience Section: Presents work experience with job titles, descriptions, and timelines in reverse chronological order.
- Education Section: Lists completed education, including institutions attended, degrees, and graduation years.
- Tech Stack Section: Displays key skills and technologies as a list of icons or labels, showing areas of expertise.
- Projects Section: Showcases a portfolio of projects with grid-based layouts for project cards.
- Suggested Interests Content: Dynamically suggest new content based on interests specified in the about me section of the page.

## Style Guidelines:

- Primary color: Soft blue (#A0B4FF) for a calm and professional feel, representing trust and stability, which resonates with portfolio content.
- Background color: Light gray (#F0F2F5) to provide a neutral and clean backdrop, ensuring readability and focus on content.
- Accent color: Muted purple (#BFA0FF) to complement the primary blue, offering a subtle contrast that draws attention to key elements like links and buttons.
- Body and headline font: 'Inter' (sans-serif) for a modern, readable, and clean look; suitable for both headings and body text. Note: currently only Google Fonts are supported.
- Use simple, consistent icons from libraries like Heroicons, in the primary color. Ensure icons are intuitive and add visual interest without being distracting.
- Use a mobile-first approach with a flexible grid and flexbox layout. The main container uses flex-column, and content is divided into scrollable sections with unique IDs. Tailwind breakpoints are used for responsiveness.
- Incorporate subtle hover effects on buttons and links using Tailwind CSS. Implement smooth scrolling to sections with anchor links for better user experience.
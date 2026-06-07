# Agence K72 Clone

A full-stack React and Vite clone of the modern, visually stunning digital agency website for K72 (k72.ca). This project seamlessly replicates the sophisticated dark/light aesthetics, smooth GSAP animations, and robust functionality of the original site, including fully realized Contact and Blogue pages.

## Features

- **Pixel-Perfect UI:** Closely matches the distinctive design system of k72.ca.
- **Advanced Animations:** Implements GSAP for scroll-triggered image pinning, dynamic page transitions (staircase effect), and staggered text reveals.
- **Responsive Layout:** fully optimized for mobile, tablet, and desktop viewing.
- **Custom Navigation:** Features an animated full-screen navigation overlay.
- **Complete Page Implementation:**
  - **Home:** Engaging video background and hero typography.
  - **Agence:** Interactive scroll-linked image reveal section.
  - **Projects:** Staggered portfolio display.
  - **Contact:** Responsive side-by-side layout with animated marquee banner.
  - **Blogue:** Interactive article grid with category filtering UI.

## Tech Stack

- **Frontend Framework:** React (v18+)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v4)
- **Animations:** GSAP (`gsap`, `@gsap/react`)
- **Routing:** React Router DOM



## Animation and GSAP Details

This project heavily utilizes **GSAP (GreenSock Animation Platform)** to drive its interactive experiences:
- **`useGSAP` Hook:** Used across components for safely managing React lifecycles with GSAP timelines.
- **ScrollTrigger:** Powers the image-pinning logic on the Agence page, allowing background images to change dynamically as the user scrolls through the content.
- **Staggered Text:** Used on the Home and Contact pages to create the signature line-by-line text reveal effect (`y: 100`, `opacity: 0`, with `stagger`).
- **Page Transitions:** The `Stairs.jsx` component creates a cinematic multi-column wipe effect whenever the route changes.


## Links

- Original Website: https://k72.ca/
- Reference Repository: https://github.com/saarthack/k72
- Live Demo: https://k72-ca-pu4d.vercel.app/

## Credits

- Original Design and Concept by [Agence K72](https://k72.ca/).
- Base repository architecture referenced from [saarthack/k72](https://github.com/saarthack/k72).

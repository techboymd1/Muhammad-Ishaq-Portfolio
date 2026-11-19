<div align="center">
  <h1>Muhammad Ishaq — Developer Portfolio</h1>
  <p><strong>A personal portfolio focused on practical web application development with C# and ASP.NET Core.</strong></p>
  <p>
    <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
    <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
    <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=222222" />
    <img alt="Static Site" src="https://img.shields.io/badge/Site-Static-202A25" />
  </p>
  <p>
    <a href="https://github.com/techboymd1">GitHub Profile</a>
    &nbsp;·&nbsp;
    <a href="mailto:techboym.d1@gmail.com">Email</a>
  </p>
</div>

---

## Overview

This repository contains the source code for my personal developer portfolio. It presents selected software projects, the technologies used to build them, my development focus, and ways to get in touch.

The site is intentionally built with **HTML, CSS, and vanilla JavaScript**. It is a lightweight static website: there is no application server, database, frontend framework, package manager, or compilation step. The C# and ASP.NET Core applications featured on the site are separate projects with their own repositories.

## Featured projects

### FixFlow — Repair workshop management

A workshop operations application that connects customer and equipment records with repair jobs, estimates, technician assignments, parts inventory, payments, and collection workflows.

- **Application stack:** C#, ASP.NET Core Razor Pages, .NET 10, Entity Framework Core, MySQL
- **Interface:** HTML, CSS, and JavaScript
- **Repository:** [techboymd1/FixFlow](https://github.com/techboymd1/FixFlow)
- **Case study:** [projects/fixflow.html](projects/fixflow.html)

### CleanRoute — Waste collection management

A role-based collection management application for residents, collectors, and administrators. Residents submit collection requests, administrators schedule pickups and assign collectors, and collectors manage their assigned schedules.

- **Application stack:** C#, ASP.NET Core Razor Pages, .NET 8, MySQL
- **Interface and security:** custom HTML/CSS/JavaScript, cookie authentication, and PBKDF2 password hashing
- **Repository:** [techboymd1/CleanRoute](https://github.com/techboymd1/CleanRoute)
- **Case study:** [projects/cleanroute.html](projects/cleanroute.html)

### TradeTrack — Small-business management

A business management application for maintaining product records, monitoring stock, recording sales, managing customers and expenses, and reviewing date-filtered reports with CSV export.

- **Application stack:** C#, ASP.NET Core Razor Pages, .NET 10, Entity Framework Core, MySQL
- **Interface:** HTML, CSS, and JavaScript
- **Repository:** [techboymd1/TradeTrack](https://github.com/techboymd1/TradeTrack)
- **Case study:** [projects/tradetrack.html](projects/tradetrack.html)

## Portfolio features

- Responsive layouts for desktop, tablet, and mobile viewports.
- Dedicated case-study pages for each featured application.
- Dark theme by default, with a light-theme option saved in browser storage.
- Mobile navigation with accessible expanded/collapsed state.
- Scroll-based reveal effects with reduced-motion support.
- Centralized email and social-profile configuration.
- Semantic page structure, a skip-to-content link, visible keyboard focus, and page metadata for search and link previews.

## Technology

| Area | Implementation |
|---|---|
| Markup | HTML5 |
| Styling | CSS3, custom properties, media queries |
| Interactivity | Vanilla JavaScript (ES6+) |
| Browser APIs | DOM, `localStorage`, `IntersectionObserver` |
| Typography and icons | System/font stacks and inline SVG icons |
| Hosting model | Static website; compatible with GitHub Pages and other static hosts |

No third-party JavaScript or CSS framework is required.

## Repository structure

```text
Muhammad-Ishaq-Portfolio/
├── index.html
├── projects/
│   ├── fixflow.html
│   ├── cleanroute.html
│   └── tradetrack.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── site-config.js
│   └── images/
│       ├── favicon.svg
│       ├── fixflow-dashboard.webp
│       ├── cleanroute-dashboard-preview.svg
│       ├── cleanroute-request-preview.svg
│       └── tradetrack-dashboard-preview.svg
├── START-HERE.txt
└── README.md
```

### Main files

- `index.html` — landing page, selected projects, about section, skills, and contact details.
- `projects/` — individual case studies with project context, feature summaries, technical details, and repository links.
- `assets/css/styles.css` — design tokens, page layout, components, theme styles, responsive breakpoints, and reduced-motion rules.
- `assets/js/main.js` — mobile navigation, theme switching, reveal effects, footer year, and link configuration.
- `assets/js/site-config.js` — email and public profile URLs used by the site.
- `assets/images/` — project imagery, previews, and favicon.

## Local development

The portfolio is a static site and does not require a build toolchain.

1. Open the repository root in Visual Studio Code.
2. Preview `index.html` using the **Live Server** extension or another local static web server.
3. Edit the relevant HTML, CSS, JavaScript, or image file. Refresh the browser when the preview does not reload automatically.

There is no `npm install`, database setup, or backend service required to develop this website.

## Configuration and content updates

### Contact and social profiles

Edit `assets/js/site-config.js` to update the public contact details and profile links. Optional profile links are only displayed when a URL is provided.

```javascript
window.PORTFOLIO_CONFIG = {
  email: "your-email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  youtube: "",
  x: ""
};
```

### Project content

Update the project summary on `index.html` and the corresponding case-study page in `projects/`. Keep project capabilities, technology versions, and status descriptions consistent with the source repository for that application.

When replacing project imagery, add the image to `assets/images/`, update the relevant relative path, and provide descriptive alternative text. Keep the image labels accurate: a design preview or illustration should not be described as a screenshot of a running application.

## Accessibility and responsive behavior

The interface uses semantic landmarks and headings, descriptive link text, a skip link, keyboard-visible focus styles, and accessible labels for interactive controls. Responsive behavior is implemented with CSS media queries. The stylesheet also includes a `prefers-reduced-motion` rule so reveal and transition effects can be reduced for visitors who request it.

## Deployment

This project can be hosted by any service that serves static files, including **GitHub Pages**, **Netlify**, and **Cloudflare Pages**. Publish the repository root and keep `index.html` at the root so the relative asset and case-study links resolve correctly. No server-side runtime or database is needed.

A public deployment URL will be added here after the portfolio is published.

## Project image notes

The FixFlow image is a capture from the local application. The CleanRoute SVGs are interface design previews from the project repository. The TradeTrack SVG is an illustrative dashboard preview, not a direct capture of the running application. These distinctions are also stated on the corresponding case-study pages.

---

## Contact

**Muhammad Ishaq**  
Email: [techboym.d1@gmail.com](mailto:techboym.d1@gmail.com)  
GitHub: [github.com/techboymd1](https://github.com/techboymd1)

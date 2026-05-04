# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gatsby v3 static site for Pure Bodywork, a massage and wellness clinic in Perth, Australia. Uses React 17, styled-components for styling, and integrates with Acuity Scheduling for bookings.

## Development Commands

```bash
npm run develop    # Start dev server at localhost:8000
npm run build      # Production build
npm run serve      # Serve production build locally
npm run clean      # Clear Gatsby cache (use when builds behave unexpectedly)
```

## Architecture

### Page Routing
File-based routing in `src/pages/` - each `.js` file becomes a route automatically.

### Layout System
- `gatsby-browser.js` and `gatsby-ssr.js` wrap all pages with `Layout` component
- Layout includes Header, Nav, Footer, and Notification banner

### Data Layer
Static data lives in `src/data/`:
- `treatmentsData.js` - Treatment definitions, pricing, durations, add-ons
- `utility.js` - Business hours, team members, booking URL, promotional notes
- `testimoniesData.js` - Client testimonials

### Styling
- **CSS-in-JS**: styled-components throughout
- **Global styles**: `src/styles/GlobalStyles.js` defines CSS custom properties (colors, breakpoints)
- **Typography**: `src/styles/Typography.js` - Poppins (body) and Josefin Sans (headings) via Google Fonts
- **Mobile breakpoint**: 640px (`--smScreen`)
- **Color palette**: `--primary` (#ae9f9b), `--dark` (#685f5d), `--light` (#cec5c3), `--purple` (#9f9bae)

### SVG Handling
SVGs can be imported as React components via `gatsby-plugin-svgr`:
```jsx
import { ReactComponent as IconName } from '../images/icons/icon.svg'
```

### Key Integrations
- **Acuity Scheduling**: Booking iframe embedded on `/booking` page (URL in `utility.js`)
- **Netlify Forms**: Contact form uses `data-netlify="true"` attribute
- **Google Analytics**: GA4 tracking via `gatsby-plugin-google-gtag`

## Content Updates

### Business Hours / Team Members
Edit `src/data/utility.js` - contains `businessHour` array and `members` array.

### Treatment Prices
Edit `src/data/treatmentsData.js` - contains treatment categories, durations, and pricing.

### Promotional Banner
Toggle `note.available` in `src/data/utility.js` to show/hide the notification banner.

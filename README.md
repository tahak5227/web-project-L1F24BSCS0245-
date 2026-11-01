# UniLoop - Web Technologies Project 1

**Good Gear. New Owners. Less Waste.**

| | |
|---|---|
| **Name** | Taha Khalid |
| **Roll number** | L1F24BSCS0245 |
| **Section** | E1 |
| **Course** | Web Technologies - Project 1 (BSCS, Semester 5) |
| **Repository** | `web-project-L1F24BSCS0245` - [GitHub link](https://github.com/tahak5227/web-project-L1F24BSCS0245-.git) |
| **Theme** | UniLoop - UCP student marketplace for academic essentials and hardware |
| **Route** | Route B - design from scratch (custom Figma wireframes) |
| **Figma wireframes** | [Link to Figma file](https://www.figma.com/design/uD2Vjt2I2RN1TarCAXPKdC/Web-Technologies-Project?node-id=0-1&t=URzDeI5fA3Y5Qadi-1) |

## Tools

Plain HTML, CSS and a little JavaScript, written in VS Code. Bootstrap 5 (CDN) is used for the grid and the navbar, and Bootstrap Icons for icons. Every page has its own custom stylesheet. Git and GitHub are used for version history.

## About UniLoop

UniLoop is a proposed student-to-student marketplace exclusively for current students of the **University of Central Punjab (UCP), Lahore**. It is designed to help students buy, sell, rent, borrow and lend academic essentials and project hardware within their university community.

Students often need books, calculators, lab equipment or electronic components for courses and projects. Buying every item new can be expensive, especially when some equipment is only needed temporarily. UniLoop aims to make these items easier to access by connecting UCP students who have items to offer with students who need them. It also encourages reuse and more affordable campus exchanges.

### Main categories

- **Academic Essentials:** Textbooks, course notes, calculators, lab coats, drawing boards, stationery and study equipment.
- **Project Hardware:** Arduino boards, Raspberry Pi devices, sensors, microcontrollers, robotics kits, electronic components, monitors and computer accessories.

### Planned features

- **UCP student-only registration:** Registration interface requesting a UCP student email, student ID, department, degree programme, semester and password.
- **Buy and sell:** Students can list and browse used academic and project-related items.
- **Rent and borrow:** Students can offer or request equipment for temporary use, with rental duration and return details.
- **Browse listings:** Items can be explored by category, condition, price and transaction type.
- **List an item:** A form for item details, description, photo, condition, price or rental fee and availability.
- **Exchange guide:** Transaction steps, item-inspection tips and a comparison of the five ways to exchange.

> **Access restriction concept:** UniLoop is intended for current UCP Lahore students only.

## Pages

Six pages, each linked to its own stylesheet.

| # | Page | File | Stylesheet | Part | Main concepts practised |
|---|------|------|------------|------|-------------------------|
| 1 | Home | `index.html` | `home.css` | Assignment 1 | Selectors, text and font properties, borders, background colour; hero, category tiles, hoverable item cards |
| 2 | Exchange Guide | `media.html` | `media.css` | Assignment 1 | Image, video, ordered and unordered lists, data table; box model, background image, display, position, float, overflow |
| 3 | Register / List Item | `register.html` | `register.css` | Assignment 1 | Forms with all required input types and validation attributes; attribute selectors, combinators, pseudo-classes, pseudo-elements |
| 4 | Categories (Services) | `services.html` | `services.css` | Assignment 2 | Card list; flexbox; transform; hover transitions |
| 5 | Explore Items (Portfolio) | `portfolio.html` | `portfolio.css` | Assignment 2 | Image gallery with captions; CSS Grid; `@keyframes`; media queries |
| 6 | Savings & Contact | `contact.html` | `contact.css`, `contact.js` | Assignment 2 | About section and contact form; flexbox and grid; media queries; one small DOM script |

> Status: pages 1 to 3 (Assignment 1) are built. Pages 4 to 6 are planned for Assignment 2.

## Project structure

```
web-project-L1F24BSCS0245/
├── index.html      
├── media.html      
├── register.html   
├── services.html   
├── portfolio.html  
├── contact.html    
├── css/
    ├── home.css
    ├── register.css
    ├── media.css
    ├── portfolio.css (Assignment 2)
    ├── services.css (Assignment 2)
    ├── contact.css (Assignment 2)
├── images/
└── README.md
```

## Git tags

- `assignment-1` - pages 1 to 3 
- `assignment-2` - pages 4 to 6 

## AI usage log

AI tools were used in this project as described below. The tool used was **Claude (Anthropic)**. This log records every use: what I asked and what I changed.

| # | Date | Tool | What I asked |
|---|------|------|--------------|
| 1 | 29-Oct-2026 | Claude | To restyle my UniLoop project overview document so it looks more professional. |
| 2 | 30-Oct-2026 | Claude | I gave it my Figma home-page design and asked for a sample structure / styling draft of `index.html` and `home.css` (Bootstrap plus custom CSS). |
| 3 | 31-Oct-2026 | Claude | Same for the Exchange Guide page (`media.html`, `media.css`). I also asked for table ideas, then asked it to add an video player, a data table structure idea. |
| 4 | 1-Nov-2026 | Claude | Same for the Register page (`register.html`, `register.css`), including the extra input types the brief requires (date, time, colour, URL, range). |


## Declaration

I, Taha Khalid, roll no. L1F24BSCS0245, declare that I used AI tools only for the uses listed in the AI usage log above. This project is for my own learning. I understand every line of my code and can explain and recreate it without help.
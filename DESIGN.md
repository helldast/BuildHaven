---
name: BuildHaven
description: Calm, premium developer site for eight new apartments in Krásné Pole, Ostrava.
colors:
  petrol-ink: "#0e2a31"
  petrol-ink-raised: "#163a43"
  ink-hairline: "rgba(196, 180, 158, 0.18)"
  cool-paper: "#f2f3f0"
  white: "#ffffff"
  sand: "#c4b49e"
  sand-strong: "#b09c80"
  bronze: "#7a6044"
  text: "#17262a"
  text-muted: "#4c5c60"
  on-ink: "#eef1ef"
  on-ink-muted: "#b9c6c6"
  rule: "#ddd6cb"
  status-available: "#2e6a4f"
typography:
  display:
    fontFamily: "Urbanist, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Urbanist, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  stat:
    fontFamily: "Urbanist, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.125rem)"
    fontWeight: 600
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
  title:
    fontFamily: "Urbanist, Segoe UI, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Urbanist, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Urbanist, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "kern, liga"
  label:
    fontFamily: "Urbanist, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  button:
    fontFamily: "Urbanist, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  none: "0px"
  dot: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(72px, 10vw, 136px)"
  wrap: "1240px"
  header: "76px"
components:
  button-primary:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.petrol-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.6em"
  button-primary-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.petrol-ink}"
  button-dark:
    backgroundColor: "{colors.petrol-ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.6em"
  button-dark-hover:
    backgroundColor: "{colors.petrol-ink-raised}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.6em"
  button-ghost-hover:
    backgroundColor: "{colors.white}"
  nav-cta:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.petrol-ink}"
    rounded: "{rounded.none}"
    padding: "0.7em 1.2em"
  unit-row:
    textColor: "{colors.text}"
    padding: "20px 20px"
  unit-row-hover:
    backgroundColor: "{colors.cool-paper}"
  unit-row-selected:
    backgroundColor: "{colors.petrol-ink}"
    textColor: "{colors.on-ink}"
  unit-detail:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "clamp(28px, 3vw, 40px)"
  contact-card-main:
    backgroundColor: "{colors.petrol-ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.none}"
    padding: "clamp(28px, 4vw, 48px)"
---

# Design System: BuildHaven

## Overview

**Creative North Star: "The Petrol Ledger"**

BuildHaven is the category-standard Czech developer site, executed carefully: deep petrol grounds that hold the opening and the close, cool paper and white for the reading sections in between, warm sand as the one accent. The client chose this look on purpose, after the manner of findanreg.cz. The system's job is to look calm, premium and smooth, and to put real evidence first (the floor plans, the unit areas, the people's phone numbers).

The page alternates its grounds in a fixed rhythm: petrol hero, paper location, white units, paper plans, a petrol band inset on paper for the company, white contact, petrol footer. Every corner is square. The one recurring shape is the slanted parallelogram frame, which takes its angle from the roof line of the logo mark. On dark grounds, faint inverted floor-plan linework serves as texture, so the architecture is the decoration. No stock imagery or invented ornament is used.

Density is moderate. Facts are stated once in tabular figures and given room to breathe. Motion is a single soft reveal on load (the hero copy rises and the hero frame wipes open along its slant) plus the unit-detail swap. Reduced-motion users get none of it.

**Key Characteristics:**
- Petrol ink for the hero, the company band, the contact lead card and the footer; cool paper and white for reading.
- Sand as the single accent: primary buttons, highlighted phrases on dark, the selected tab underline, the detail panel's top rule.
- Urbanist throughout, 600 for headings, with tight negative tracking.
- Square corners everywhere except the round status dots.
- Slanted parallelogram frames for images and the map.
- Real floor-plan linework as the only texture.

## Colors

Two grounds and a warm accent: a deep blue-green petrol, a nearly neutral cool paper, and a muted sand that reads as quiet gold.

### Primary
- **Petrol Ink** (petrol-ink): the dark ground for the hero, the about band, the lead contact card, the footer and the fixed header. It is also the selected unit-row fill and the dark button. It matches the `theme-color` meta.
- **Raised Petrol** (petrol-ink-raised): used only as the dark button's hover state.

### Secondary
- **Sand** (sand): the accent. It fills primary buttons and the nav CTA, colors highlighted phrases on petrol (`hl`), draws the 3px top rule of the unit detail panel, and is the text-selection color.
- **Strong Sand** (sand-strong): the accent in its hardworking form on light grounds. It draws the focus ring, the selected-tab underline, text-link underlines, contact icons on light grounds, the reserved-status dot and the scrollbar thumb.
- **Bronze** (bronze): the highlighted phrase on light grounds (`hl-dark`) and the contact-link hover on light grounds. Sand fails contrast on paper, so bronze replaces it there.

### Neutral
- **Cool Paper** (cool-paper): the page background and the alternating light section ground. It is also the unit detail panel and the row hover.
- **White** (white): the alternate light section ground (units, contact). It fills the slanted image frames and the plan sheet, and it is the hover fill for sand buttons.
- **Ink Text** (text): body and heading text on light grounds.
- **Muted Text** (text-muted): supporting copy, section intros, table labels, captions and roles.
- **On-Ink** (on-ink): primary text on petrol.
- **On-Ink Muted** (on-ink-muted): secondary text on petrol (lead, nav links, fact labels, footer address).
- **Rule** (rule): hairlines between rows, specs and contacts on light grounds, the ghost-button border and the map placeholder fill.
- **Ink Hairline** (ink-hairline): a translucent sand hairline on petrol, used for the facts strip dividers, the closing rule and the mobile menu separators.
- **Available Green** (status-available): the dot for an available ("Volný") unit.

### Named Rules
**The One Accent Rule.** Sand is the only accent. It goes on actions and on one highlighted phrase per heading. Never introduce a second hue. On light grounds, sand moves to sand-strong (for lines and rings) or bronze (for text).

**The Gold Is the Mark Rule.** The gold logo mark is the only gold on the page. Sand stays muted and never becomes metallic or saturated gold.

## Typography

**Display Font:** Urbanist (self-hosted variable woff2, 100–900, latin and latin-ext subsets), with Segoe UI and system-ui as fallbacks
**Body Font:** Urbanist, same stack

**Character:** a single geometric sans carries everything. Hierarchy comes from size, weight 600, and tight negative tracking on headings. Small uppercase tracking is kept for functional labels.

### Hierarchy
- **Display** (600, clamp 2.6–4.75rem, 1.08, -0.02em): the hero H1 only. Its second line is a sand `hl` phrase set as a block.
- **Headline** (600, clamp 2–3rem, 1.08, -0.02em): section H2s. The closing line in the footer uses a larger variant (clamp 2–3.25rem, 1.1, max 16ch). The unit detail H3 is display-sized at clamp 2.25–3rem.
- **Stat** (600, clamp 1.5–2.125rem, -0.01em, tabular figures): values in the facts strip. Below 560px it drops to 1.25rem and does not wrap.
- **Title** (600, 1.5rem): contact names. The lead contact uses clamp 2–2.5rem.
- **Lead** (400, 1.125rem, 1.6): section intros and location/about copy, at 46–52ch. The hero lead is clamp 1.125–1.3rem at 34ch.
- **Body** (400, 1.0625rem, 1.6, dropping to 1rem below 560px): running text, with `text-wrap: pretty` on paragraphs and `balance` on headings.
- **Label** (600, 0.875rem, 0.06em, uppercase): the unit table header. Nav links use the same treatment at 0.9375rem/500. The hero frame caption uses it at 0.8125rem with 0.08em tracking. Labels name functional columns and controls, never a section.

### Named Rules
**The Tabular Facts Rule.** Every number a buyer compares (areas, the price rate, phone numbers, fact values, spec values) is set in `font-variant-numeric: tabular-nums` with Czech formatting (decimal comma, non-breaking spaces).

**The No Eyebrow Rule.** Headings stand alone. No small uppercase kicker sits above an H1 or H2.

## Layout

The content column is a centered wrap with a 1240px max width plus fluid gutters (clamp 16–48px). Sections are padded vertically by a fluid section rhythm (clamp 72–136px). The fixed header is 76px tall. Anchor scrolling is offset by 84px, and the sticky unit detail sits at top 104px.

Two-column grids with asymmetric fractions drive every band: hero 1fr / 1.05fr, location 0.9fr / 1.1fr, units 1.5fr / minmax(300px, 1fr), about 0.85fr / 1.15fr, contact 1fr / 1.2fr. Gaps are fluid and in the range of clamp 32–96px. Section intros are capped at 640px wide.

The facts strip runs along the bottom of the hero as a four-column definition list, separated by ink hairlines.

Breakpoints: at 1100px unit rows tighten. At 900px every grid collapses to one column, the nav becomes a toggled drop panel, the facts become 2×2, the unit detail stops being sticky, the about frame loses its slant for a bottom-edge diagonal, and the footer becomes two columns. At 560px hero buttons go full width, unit rows reflow into name/area against status, the table header hides, and the footer becomes one column.

### Named Rules
**The Alternating Ground Rule.** Light reading sections alternate paper and white, and petrol bookends the page. The inset petrol band of the about section counts as a break, so the plans section (paper) can sit directly above it. When the white gallery is visible, it sits between them. A new light section takes whichever ground its neighbors leave.

## Elevation & Depth

The system is flat, and depth comes from tonal grounds. Petrol bands sit against paper, and white sheets sit on paper. Only two shadows exist, and both are soft and functional.

### Shadow Vocabulary
- **Header lift** (`box-shadow: 0 8px 24px -16px rgba(0, 0, 0, 0.6)`): appears under the fixed header once the page scrolls past 40px, or when the mobile menu is open.
- **Plan sheet** (`box-shadow: 0 18px 40px -28px rgba(14, 42, 49, 0.45)`): a petrol-tinted contact shadow under the white floor-plan sheet, so it reads as paper laid on the ground.

### Named Rules
**The Flat Ground Rule.** Cards, buttons and frames carry no shadow at rest or on hover. Elevation is for things that physically float: the fixed header and a laid-down sheet.

## Shapes

Every corner is square (0px): buttons, panels, cards, tabs, frames and the menu toggle. The only round shapes are the 8px status dots (50%).

The signature form is the slant. The hero frame is a parallelogram whose top and bottom edges are offset by `--slant` (9%, or 7% below 900px). The map frame cuts one bottom corner by the same slant. The about frame tapers its right edge by 1.4× slant and overhangs the petrol band by 48px top and bottom. Below 900px the about frame becomes a rectangle with a 28px diagonal bottom edge.

Lines are hairline (1px rule or ink-hairline). Emphasis lines are 3px: the sand top rule on the unit detail panel and the sand-strong underline on the selected tab.

### Named Rules
**The Roof Angle Rule.** Slants come only from `--slant` and only on image or map frames, echoing the roof of the logo mark. Text containers, buttons and cards stay rectangular.

## Components

### Buttons
Buttons are solid, square and quiet.
- **Shape:** square (0px). The text is the button label style, the padding is 0.95em × 1.6em, and the 1px border matches the fill.
- **Primary:** sand fill with petrol text. On hover it goes to white fill and white border. Used for the hero, about and footer closing actions.
- **Dark:** petrol fill with on-ink text, hovering to raised petrol. It is the call action in the unit detail panel.
- **Ghost:** transparent, with a rule border and ink text. On hover it gets a white fill and a sand-strong border. It is the email action beside the dark button.
- **Active:** translateY(1px). Transitions are 0.3s on the house ease.
- **Icons:** 24-unit stroked line SVGs (1.6 stroke, round caps) sit inline at 1.15em with a 0.6em gap.

### Text Link
A 600-weight ink link with a 2px sand-strong underline offset by 6px. On hover the underline turns ink. Used for secondary actions (open map, download PDF).

### Navigation
The header is a fixed petrol bar, 76px tall. It holds the logo mark at 46px wide, followed by "Build**Haven**" in live text (1.375rem, 500/700). Nav links are uppercase 0.9375rem/500 with 0.06em tracking, on-ink-muted and turning white on hover. The last item, "Kontakt", is a sand CTA block. Below 900px a 44px square toggle with a hairline border animates three bars into an X and opens a full-width petrol panel with hairline-separated links.

### Facts Strip
A four-cell definition list at the foot of the hero. Each cell has an on-ink-muted label above a stat value, and the cells are divided by ink hairlines.

### Unit Selector (signature)
This is the core interaction. A list of full-width row buttons (name, area, status) sits beside a sticky detail panel.
- **Rows:** transparent, with a rule hairline beneath and tabular figures. The column header row is uppercase label text over a 1px ink line. On hover a row fills paper. The selected row (`aria-pressed="true"`) fills petrol with on-ink text, and its status dot turns light green (#7fd1a6).
- **Status:** a 600-weight label preceded by an 8px dot: available green, reserved sand-strong, sold grey.
- **Detail panel:** paper ground, 3px sand top rule, and a large H3 over a spec list of label/value rows with rule hairlines. Below the specs are full-width dark and ghost buttons and a muted study-stage note. On each selection the children replay a 0.5s rise from 6px.
- **Deep links:** each row is addressable as `#byt-N`.

### Floor-Plan Tabs
A text tablist on a rule baseline. Tabs are 600-weight, text-muted, turning ink on hover. The selected tab is ink with a 3px sand-strong underline. Each panel shows a white plan sheet (with the plan shadow), a "Zvětšit" petrol chip that appears on hover or focus, and a PDF text link.

### Slanted Frame
A white figure clipped to the roof-angle parallelogram that holds a contained image (a plan or the logo mark). The hero frame wipes open along its slant over 1.4s on load. Its caption is uppercase label text in muted ink, set inside the slant.

### Contact Block
The lead contact is a petrol card (name at title-large, on-ink-muted role, sand icons). Collaborators are a hairline-separated list on white. Contact lines are 1.1875rem/600 tabular links with a stroked icon. On hover they turn bronze on light grounds and sand on petrol.

### Extension Hooks
- **Units:** the `BYTY` array at the top of `script.js` holds `{ cislo, plocha, stav }`. `stav` is one of `volny`, `rezervace` or `prodano`, and each maps to a status label and dot color. Rows, the detail panel and the `#byt-N` anchors render from this array. Do not hand-write rows in the HTML.
- **Visualisations:** the `VIZUALIZACE` array in `script.js` holds `{ src, popis }`. When it is non-empty, the hidden "Vizualizace" gallery section appears as an auto-fit grid (min 280px, 4:3 cover crops, muted captions). The first entry replaces the plan in the hero frame and the second replaces the logo mark in the about frame.
- **`is-photo` state:** script adds `is-photo` to the hero and about frames when a visualisation fills them. The state removes the frame padding and switches the image to `object-fit: cover`. On the hero it also puts the caption on an 85% petrol chip. The slant clip stays. New photo slots should use the same class instead of a new frame.

## Do's and Don'ts

### Do:
- **Do** use petrol for the hero, footer and any band that needs weight, and alternate paper and white for everything in between.
- **Do** keep sand to actions and one highlighted phrase per heading, and switch to bronze for highlighted text on light grounds.
- **Do** set every comparable number in tabular figures with Czech formatting.
- **Do** frame images and maps with the `--slant` parallelogram, and swap content through the `is-photo` state.
- **Do** use the real floor-plan linework (inverted, screen-blended, 4–7% opacity, masked) as the only texture on petrol grounds.
- **Do** keep corners square and lines hairline, with 3px reserved for selected or active emphasis.
- **Do** respect `prefers-reduced-motion`, which already strips every animation and transition.

### Don't:
- **Don't** add eyebrow or kicker labels above headings.
- **Don't** build rounded icon-card rows or round any container, button or frame. Status dots are the only round shapes.
- **Don't** use stock photography or stand-in images posed as the building. Empty visualisation slots stay hidden until real images are listed.
- **Don't** introduce a second accent hue or a saturated gold. The logo mark is the only gold.
- **Don't** put shadows on cards, buttons or frames, and don't use hard offset shadows.
- **Don't** render the company name as an image. The mark is an image and "BuildHaven" is live text.

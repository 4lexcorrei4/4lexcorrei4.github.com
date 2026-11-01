---
name: profile-blocks
description: >-
  Choose a profile-block pattern and reuse the components in src/components,
  where each component has its own folder.
  Use when adding or editing profile sections, top skills, languages, strengths,
  hobbies, monograms, pills, icon rows, or the Me page.
---

# Profile blocks

Reuse the components in `src/components/`, where each component lives in its own folder with an `index.tsx` entry point. Keep component styles in that folder as `style.css` when needed. Add a new block as `src/components/Name/index.tsx` and, if it has styles, `src/components/Name/style.css`. Do not copy the markup into a page.

Each block uses one pattern, chosen by what the items are:

- A discipline or phrase is `PhraseLine`: one middot-separated text line. No icon per item, and no heading.
- A named item with a short code and a second line of detail is `MonogramList`: a Kalam monogram, the name, and that detail.
- A single-word trait is `PillList`. No heading.
- A concrete activity is `IconLabelRow`: an icon stacked on its label. The SVG ships with the label.
- Skip a heading when the items already name the block.
- Removing a block means deleting assets that nothing else references.

## Current pages

Me (`src/pages/me/`) always shows `IntroPhoto` at 200px, then the headline in the same type as the home tagline, then two tabs. The column is about 80% of the page wide, capped near 900px. About is open by default. `?tab=about` and `?tab=profile` select the tab.

1. About — `IntroDescription`, the two paragraphs, then `IconLabelRow` for Hike, Photography, Dance, Music, Sail, using the SVGs in `public/assets/hobbies/`.
2. Profile, in order:
   - `PhraseLine` — Full-Stack Development, Search and Retrieval, Photography and Video. Text only, no link. These follow how the projects process work: interfaces through services and data, search that narrows a catalogue or archive, and still or moving images.
   - `MonogramList` — PT then EN. Portuguese is native or bilingual. English is professional working proficiency.
   - `PillList` — the strength words already on the page.

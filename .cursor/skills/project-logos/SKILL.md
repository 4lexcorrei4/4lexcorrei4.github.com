---
name: project-logos
description: >-
  Choose a project logo from the site icon, a sharp video frame where the
  project name appears, a PDF page crediting the owner and showing their
  work, or a named exception, then save it as a square tile.
  Use when adding or editing a project logo, a Jobs company logo, favicon,
  card image, or the Projects or Jobs page, or extracting PDF, ebook, or
  video project screenshots.
---

# Project logos

The card and the detail header both read `project.logo` from `src/infos/projects.ts`. Screenshots stay in the carousel. The tile is square, uses `background-size: cover`, and has a 10px corner radius. On a phone the card image is 40px, so that radius cuts into the corners.

The Jobs page reads `job.logo` from `src/infos/jobs.ts`. That mark is 70px with the same 10px radius.

## Where the image comes from

- A live site uses its square icon (favicon or `icon`), not a wide wordmark. A job company uses that same icon from the official site in `job.url`. Follow the site-icon steps below.
- A video uses a sharp frame where the project name appears; follow the frame-selection steps below. Do not use Instagram's icon.
- A PDF or ebook uses pages crediting the portfolio owner and showing their work; follow the page-selection steps below, not random pages or evenly spaced samples.
- Estuary of Tejo, Fashion Product Search, and WordBucket stay on their screenshots.
- Taxonomy Feedback Loop Dashboard copies `hop-ui/public/logo.svg`, the Human Oversight Panel mark, not `opshub-logo.svg`.
- CAP is an SVG of a wireless router. Aquarium Management is the existing fishbowl SVG. Thesis is the existing student-hat SVG.
- Forall Family uses the full wordmark from https://www.instagram.com/p/Cu2Isepssh2/, not the profile picture and not the cropped `og:image`.
- Schedule Simulator and CLIP Curricular Units keep their existing icon artwork.

## How video frames are chosen

Download the video and decode frames with display rotation applied. Sample densely across the clip rather than taking the first frame. Compare neighboring frames around promising moments, especially pauses in movement. Inspect them at full resolution and reject motion blur, smeared faces, soft focus, transitions, and heavy compression artifacts.

Carousel screenshots are three distinct sharp frames in time order, saved as `public/assets/projects/<codename>/screenshot<N>.png`. Keep the full frame and its aspect ratio. If a hyperlapse never fully pauses, use the least-blurred frames and say so.

The logo is a separate file. Search the sharp frames for the project name on screen: a title card, an end card, or lettering such as "NOMAD" on the bar. That frame wins, even when another frame shows the subject more clearly. Reject a blurred title and take the sharpest neighbor where the name is still readable. Only when the name never appears, fall back to the sharp frame whose subject is what the name points at, such as the tower, the statues, or the dance on the board. A face close-up is not the logo. Report which projects used a title frame and which fell back.

Save the logo as `public/assets/projects/<codename>/logo.png` at 512×512, a cover crop of that frame. Check the square crop and the 40px card preview so the name, or the fallback subject, stays recognizable. Do not overwrite a carousel screenshot.

## How PDF pages are chosen

Use the PDF linked by the project, resolving local asset URLs under `public/`. Read its text and search for the owner's credited name, using whitespace-normalized, case-insensitive matching. A name in a contents page or contributor list is only a lead: inspect the credited section and its neighboring pages to confirm which work belongs to the owner. Stop at the next contributor or section; do not attribute another person's work to the owner.

Prefer a readable credited page plus representative pages of the owner's work within that section. "Appearing" in a PDF means being credited and showing their work, not identifying someone from a face. If the user specifically wants photos of themselves, ask for confirmed page numbers. For scanned PDFs, use local OCR or ask for page numbers if attribution cannot be verified; never silently fall back to random pages.

Render the selected pages directly from the PDF with a local renderer such as `pdftoppm` or macOS PDFKit. Use at least 2000px on the long edge, preserve the whole page or spread and its aspect ratio, and inspect the exported images for readable credits, sharp photographs, and clipping. Use the project's existing screenshot count when enough distinct suitable pages exist; otherwise use fewer images and update `screenshots` to match.

Save carousel pages as `public/assets/projects/<codename>/screenshot<N>.png` in reading order. Report the 1-based PDF page indices separately from printed page numbers. For Estuary of Tejo, the owner's credited section is PDF spreads 17–20 (printed pages 32–39); spread 21 begins the next contributor. Keep Thesis's student-hat icon and the other named logo exceptions.

If a screenshot is also the project's logo, check its square crop and 40px preview after replacing it. Use a separate square tile from the selected work if that crop obscures the subject, without cropping the carousel pages. Verify that every `logo` and `screenshots` asset exists and run the focused Projects tests after refreshing assets or their references.

## How a site icon is chosen

Open the page linked by the project, or by `job.url` for a company. Take the largest square image among `rel="icon"` (including a shortcut icon), `apple-touch-icon`, and the icons in a linked web manifest. Leave out a wide wordmark and `og:image`. When the links are sized crops of one asset, use the largest square file of that same asset, including an unsuffixed original. If the site only publishes a small icon, use that file and scale it up.

## How a graphic logo is saved

Write `public/assets/projects/<codename>/logo.png`, or `public/assets/work/<slug>.png` for a job, at 512×512 and point `logo` at it. Do not overwrite a screenshot that the carousel also uses. Keep an SVG source when one exists. Remove the previous job image when the new file replaces it.

Fill the square with the corner color. An opaque corner pixel is that color. A transparent corner with an opaque pixel within 15% of the side, on an icon that fills the square, uses that nearby color (Aqua2Value blue, the Taxonomy gradient, Samucar black). Any other empty corner is white. When the four corner colors differ, each empty pixel takes the nearest opaque pixel. Also sample the middle of the top, right, bottom, and left edges. When those four samples are opaque and the same color, that color is the margin, including when the corners are empty. When the edges disagree, keep the corner rule. Inset the artwork by 12% of the side so the rounded crop leaves the mark intact. The margin is that color.

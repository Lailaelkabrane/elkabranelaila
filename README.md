# Dashboard portfolio, Bac+3 version (Next.js)

Python Developer, Data Analyst, Full Stack Developer and related roles.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in /out
```

## Publish on GitHub Pages
1. Create a repository (for example `portfolio-bac3`) and push to `main`.
2. Settings, Pages, Source: GitHub Actions.
3. The site appears at `https://<username>.github.io/<repository>`. The workflow sets the sub path itself.

## Edit content
Everything lives in `data/portfolio.ts`.

* `withMasters` at the top: true shows the Master's degree, false shows the Bac+3 profile only.
* Replace `public/Laila_El_Kabrane_CV.pdf` with the CV that matches this version.
* Skill levels and language scores are self-assessed guesses, adjust them honestly.
* Rows marked `confirm: true` in a project stack are guesses, correct them then delete the line.

## French version
The EN / FR switch in the top bar translates the whole site. All French texts are in `data/fr.ts`: the key is the English text, the value is the French text. When you add or change English text in `data/portfolio.ts`, add or update the matching line there. A missing line simply stays in English.

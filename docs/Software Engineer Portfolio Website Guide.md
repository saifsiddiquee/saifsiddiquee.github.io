# Software Engineer Portfolio Website Guide

Oct 18, 2026 · @Saif

## 1. What reviewers actually do with your portfolio

Your portfolio gets a first pass of roughly 30–60 seconds, and only earns a deeper 2–5 minute look if that pass succeeds. Design everything around surviving that first minute.

Industry surveys report that about 80% of recruiters spend 3 minutes or less on a portfolio ([scale.jobs](https://scale.jobs/blog/portfolio-content-for-tech-jobs-what-recruiters-want)). Projects that pass the first impression typically get 2–5 minutes of closer review ([Fueler](https://fueler.io/blog/how-recruiters-evaluate-your-digital-portfolio)).

A typical engineering hiring manager's first minute looks like this ([DevPlaybook](https://devplaybook.cc/blog/developer-portfolio-checklist-20-things-hiring-managers)):

1. **Homepage, \~10 s** — What do you do, and what is your main stack?
2. **One featured project, \~20 s** — Is there a live demo? Does it look real?
3. **The code, \~20 s** — Is it readable? Is there a README?
4. **GitHub profile, \~10 s** — Is there recent activity?

Pass all four and you get a longer look; fail one and you are usually filtered out.

**Who reads it.** Recruiters, HR, engineering managers and senior engineers may all see the same site at different stages. Recruiters scan for role fit and keywords; engineers open the code. Your site must serve both: a clear headline for the first, real repositories and technical depth for the second.

**What they are judging.** Hiring teams increasingly assess problem-solving, technical judgment, trade-off reasoning and communication — not just output. With AI-assisted coding now common, polished code alone says less; explaining *why* you made decisions says more ([SOLTECH](https://soltech.net/how-to-evaluate-software-engineering-talent-a-guide-for-hr-leaders/)).

## 2. Core principles

A professional portfolio is a curated argument that you can do the job you want, not an archive of everything you have built.

1. **Proof over claims.** Every skill you list should be backed by a project, a commit, a write-up or a number. A skills list with no projects behind it is close to meaningless.
2. **Curate ruthlessly.** 3–4 strong projects beat 8–12 small ones. Quality signals judgment; quantity signals noise.
3. **Show the thinking, not just the result.** Explain the problem, the options you weighed, the trade-off you chose and what you would change. This is what separates engineers from code producers.
4. **Write for a busy reader.** Lead with the conclusion. Short sentences, scannable headings, nothing the reviewer must hunt for.
5. **Aim at a target role.** A backend engineer emphasizes APIs, data and scale; a frontend engineer emphasizes UX, performance and accessibility. One site cannot be everything to everyone.
6. **The site itself is a work sample.** Speed, accessibility, responsiveness and clean code on your own site are evidence of your standards.
7. **Be honest.** Credit tutorials, courses and collaborators. State your actual role on team projects. Misrepresentation is discovered in interviews and ends candidacies.

## 3. Site structure

Put your identity and your work in the first two screens; everything else comes after. A site that opens with a long bio and a skills grid before any project loses attention.

Recommended order for a single-page portfolio (or the home page of a multi-page one):

1. **Hero** — name, title, primary stack, one-line value statement, primary call to action.
2. **Featured projects** — 3–4 cards, each linking to a case study.
3. **Experience** — roles, companies, dates, 2–3 impact bullets each.
4. **About** — a short, human paragraph: what you care about, how you work.
5. **Skills** — grouped and honest, only what you can discuss in an interview.
6. **Writing / talks / open source** — optional but high-signal.
7. **Contact** — email, LinkedIn, GitHub, résumé download.

**Navigation.** Keep a sticky header with 4–5 links (Work, Experience, About, Writing, Contact) plus a visible Résumé button.

**Single page vs multi-page.** A single page suits juniors and anyone with few projects. Senior engineers with substantial case studies benefit from a home page plus one page per project, which also helps search engines index each project.

**Pages worth having:**

| Page | Purpose | Required? |
| --- | --- | --- |
| Home | Identity + featured work in under 10 seconds | Yes |
| Project case studies | Depth for engineers who want to dig in | Yes (one per featured project) |
| Résumé | PDF download plus an HTML version | Yes |
| Blog / writing | Shows communication and depth | Recommended |
| Uses / now page | Tools you use, what you are working on | Optional |
| Custom 404 | A small touch of polish | Optional |

## 4. Hero and About section

Within 5 seconds, a stranger should be able to say who you are, what kind of engineer you are, and how to contact you.

**Hero checklist:**

- Name and a specific title: "Backend Engineer · Go, PostgreSQL, AWS" beats "Passionate developer who loves to build things".
- One-line value statement focused on outcomes: "I build reliable payment APIs that handle millions of requests a day."
- Years of experience or level, and location / time zone / remote availability.
- Primary calls to action: **View my work** and **Download résumé**, plus icons for GitHub, LinkedIn and email.
- Optional: "Open to roles" status, a professional photo (clear, friendly, well lit).

**Weak vs strong headlines:**

| Weak | Strong |
| --- | --- |
| Hi, I'm Rahim, a passionate coder | Rahim Ahmed — Full-stack engineer (React, Node.js), 3 years |
| I love solving problems | I build fast, accessible web apps for fintech teams |
| Aspiring software engineer | CS graduate shipping production apps with TypeScript and PostgreSQL |

**About section.** Keep it to 3–5 sentences: your focus, a short professional story, how you work with others, and one human detail. Avoid generic adjectives ("hard-working", "detail-oriented"); show those traits through your projects instead.

## 5. Projects — the heart of the portfolio

Show 3–4 strong, varied projects, each with a working demo, a clean repository and a short case study that explains the problem, your decisions and the result.

### How to choose projects

- **At least one solves a real problem** — something people actually use, even 10 users. "I built this because X frustrated me" beats "I followed a tutorial". Reviewers recognize to-do apps, weather apps and course clones instantly.
- **Show range:** one UI-heavy project, one data- or algorithm-heavy project, and one with real deployment and infrastructure concerns.
- **Match your target level.** Senior candidates should show senior concerns: scalability, testing strategy, architecture, observability.
- **One deeply iterated project** — refactored, extended and maintained over months — often impresses more than several shallow ones.
- **Professional work counts.** If your best work is proprietary, describe it in a case study without revealing confidential code or data.

### Project card (on the home page)

Every card shows, at a glance: project name, one-line description, tech stack, a screenshot or short GIF, and **both** a live demo link and a GitHub link.

### Case study template (project page)

1. **Overview** — one paragraph: what it is, who it is for, your role, timeline, team size.
2. **Problem** — the real need or pain point.
3. **Constraints** — time, budget, scale, legacy systems.
4. **Approach and architecture** — a simple diagram, key components, data flow.
5. **Key decisions and trade-offs** — what you chose, what you rejected, and why.
6. **Challenges** — the hardest bug or problem and how you solved it.
7. **Results** — numbers wherever possible: "cut page load from 4.2 s to 1.1 s", "300 weekly users", "reduced AWS cost by 35%".
8. **What I learned / what's next.**
9. **Links** — live demo, repository, video walkthrough.

### Demos

- A broken demo is worse than no demo. Check links before every application.
- Free-tier backends often sleep; warn visitors or keep a demo account with seed data ready.
- If a live demo is not possible, record a 1–2 minute walkthrough video.
- Provide demo credentials so reviewers never have to sign up.

### Repository standards

- **README** with: what it does, screenshots or GIF, tech stack, how to run it locally (commands), architecture notes, and known limitations.
- **Readable code** — small files, clear names, no 500-line components or unexplained magic numbers.
- **Tests** — at least unit tests for core logic and a few integration tests.
- **Meaningful commits** — "Add rate limiting to auth endpoint" rather than "fix" or "wip".
- **CI badge, license and a `.env.example`** — small signals of professional habits.
- **No secrets** committed, ever.

## 6. Skills, experience, résumé and contact

These sections support your projects; keep them factual, scannable and consistent with your résumé and LinkedIn.

**Skills**

- Group them: Languages · Frontend · Backend · Data · Cloud/DevOps · Tools.
- List only what you could be interviewed on tomorrow. Put your strongest first.
- Skip progress bars and percentages ("Python 85%") — they mean nothing and invite skepticism.
- Ideally, link each core skill to the project that proves it.

**Experience**

- Role, company, dates, location, then 2–3 impact bullets each.
- Use action + scope + result: "Migrated billing service to event-driven architecture, cutting failed payments by 22%."
- Include internships, freelance work and significant open-source roles.

**Résumé**

- A one-click PDF download, named clearly (`Firstname-Lastname-Resume.pdf`), plus an HTML version that search engines and screen readers can read.
- Keep dates, titles and numbers identical across résumé, site and LinkedIn — inconsistencies are noticed.

**Contact**

- Show your email address as plain text in the header or hero **and** the footer. Contact forms often go unused or fail silently; if you use one, keep the email visible too.
- Use a professional address, ideally on your own domain (`hello@yourname.dev`).
- Link GitHub and LinkedIn; add others (X, Mastodon, Stack Overflow) only if they are professional and active.
- State your availability and preferred role types.

## 7. Design and UX

Clean, consistent and content-first beats flashy. The design should make your work easy to read, not compete with it.

- **Typography:** one or two typefaces, 16–18 px body text, line length around 60–75 characters, clear heading hierarchy.
- **Color:** a neutral base plus one accent color. Support dark mode if you can, and make sure both themes stay readable.
- **Whitespace and grid:** generous spacing and consistent alignment signal care.
- **Visuals:** real screenshots, short GIFs or architecture diagrams of your projects — not stock photos or generic illustrations.
- **Animation:** subtle and purposeful. Respect `prefers-reduced-motion`. Avoid heavy 3D scenes, custom cursors and long intro loaders that delay content.
- **Mobile first:** many reviewers open links on their phone. Test on iOS Safari and Android Chrome.
- **Personality, in moderation:** a distinctive touch (a small interactive element, a well-written voice, a thoughtful color palette) helps you be remembered — as long as it never slows down access to your work.
- **Templates:** fine to start from, but customize them enough that your site does not look identical to hundreds of others. Engineers notice; frontend roles especially reward original work.

## 8. Technical quality

Your portfolio site is itself a code sample: it should be fast, accessible, responsive, discoverable and built with a stack you can defend.

### Performance

Aim to pass Google's Core Web Vitals ([web.dev](https://web.dev/articles/vitals)) and load in about 2 seconds:

| Metric | Measures | Good threshold |
| --- | --- | --- |
| Largest Contentful Paint (LCP) | Loading | 2.5 s or less |
| Interaction to Next Paint (INP) | Responsiveness | 200 ms or less |
| Cumulative Layout Shift (CLS) | Visual stability | 0.1 or less |

- Use static generation (SSG) or server rendering; avoid a blank page while a large JavaScript bundle loads.
- Compress images (WebP/AVIF), set width and height, lazy-load below the fold.
- Self-host or preload fonts; limit font weights.
- Aim for Lighthouse scores of 90+ in every category, and check PageSpeed Insights on mobile.

### Accessibility (WCAG 2.2 AA as the target)

- Semantic HTML: one `h1`, proper heading order, `nav`, `main`, `footer`, real `button` and `a` elements.
- Text contrast of at least 4.5:1; visible keyboard focus; everything usable with a keyboard alone.
- Descriptive `alt` text for screenshots; captions for videos.
- Test with axe DevTools or Lighthouse and a quick screen-reader pass.

### SEO and sharing

- A unique `<title>` and meta description on each page ("Rahim Ahmed — Backend Engineer").
- Open Graph and Twitter card tags with a custom preview image, so links look good on LinkedIn and Slack.
- `sitemap.xml`, `robots.txt`, a favicon, canonical URLs, and structured data (`Person` schema).

### Domain and hosting

- Use your own domain (`yourname.dev`, `.com` or `.me`) — usually around US$10–15 a year. It looks more professional than a default subdomain.
- Free, reliable hosts: Vercel, Netlify, Cloudflare Pages, GitHub Pages. Always use HTTPS.
- Make sure demos on free tiers do not sleep at the moment a recruiter clicks.

### Choosing the tech stack

| Your goal | Sensible choice |
| --- | --- |
| Fast, content-focused site | Astro, Eleventy or Hugo (static) |
| Showcase React / frontend skill | Next.js, Remix or SvelteKit with SSG |
| Backend or ML engineer, minimal effort | A static generator or a clean template, customized |
| Blog-heavy | Astro or Next.js with MDX |

Pick a stack that matches the role you want, keep the site's own repository public and clean, and mention the stack in the footer.

### Analytics and security

- Privacy-friendly analytics (Plausible, Umami, Cloudflare Web Analytics) show whether your links get clicked.
- No API keys in client code; basic security headers; up-to-date dependencies.

## 9. GitHub, writing, open source and social proof

External evidence — real users, merged pull requests, published writing — is the strongest signal you can add, because someone other than you vouched for the work.

**GitHub profile**

- Add a profile README: who you are, what you're working on, core technologies. It takes about 30 minutes and most candidates skip it.
- Pin your 6 best repositories manually; hide or archive old tutorial repos.
- Recent, steady activity helps. If you've been in a private-code job, a few strong public repos with recent commits are enough — don't pad the contribution graph.

**Open source**

- Merged contributions to established projects show you can pass a real code review. Link specific pull requests, not just the project.
- Start with documentation, bug fixes or "good first issue" labels, then grow.

**Writing and talks**

- A technical blog shows communication — a core engineering skill. Good topics: a hard bug you fixed, a technology comparison, a lessons-learned post on a project.
- Two or three thoughtful posts beat twenty thin ones. Cross-post to dev.to, Hashnode or Medium with a canonical link back to your site.
- Talks at meetups, conference slides, podcasts or YouTube walkthroughs all count.

**Social proof**

- Real user counts, GitHub stars, downloads, hackathon results, competitive programming ranks (LeetCode, Codeforces), Kaggle medals, certifications that match the role.
- Short testimonials from managers, clients or teammates — with their name, role and permission. Never invent or embellish them.

## 10. Tailoring by career stage and role

What you emphasize should change with your level and your target role; the structure stays the same.

**By career stage**

| Stage | Emphasize | Avoid |
| --- | --- | --- |
| Student / new graduate | 3 original projects, internships, hackathons, relevant coursework, learning speed | Course assignments and tutorial clones as headline work |
| Junior (0–2 years) | Real-world projects, production experience, code quality, tests | Long skills lists, vague bios |
| Mid-level (2–5 years) | Measurable impact at work, ownership, system design decisions | Only side projects with no work context |
| Senior / staff (5+ years) | Architecture, scale, leadership, mentoring, cross-team impact, writing | Toy apps; focusing on syntax over judgment |
| Career switcher | Transferable domain knowledge, projects in your previous domain, consistent progress | Hiding your background — use it as an advantage |

**By role**

| Role | What to show |
| --- | --- |
| Frontend | Polished UI, accessibility, performance scores, design-system or component work; the site itself is your strongest sample |
| Backend | APIs with docs (OpenAPI), data modeling, caching, queues, auth, load-test results, architecture diagrams |
| Full-stack | One end-to-end product: frontend, API, database, auth, deployment, CI/CD |
| Mobile | App-store links, short videos, offline handling, performance on low-end devices |
| DevOps / SRE / cloud | Infrastructure as code, CI/CD pipelines, monitoring dashboards, cost and reliability improvements |
| ML / AI | Problem framing, data pipeline, evaluation metrics, deployed demos, model cards, notebooks, papers |
| Data engineering | Pipelines, data quality checks, orchestration, warehouse modeling, scale numbers |

**Applying abroad or to remote roles:** state your time zone and work-authorization or relocation status, write in clear English, and show experience with async communication and distributed teams.

## 11. Common mistakes to avoid

Most portfolios fail on clarity and maintenance, not talent.

1. Vague headline ("I love coding") with no title or stack.
2. Bio and skills before any projects.
3. Tutorial clones (to-do, weather, Netflix clone) as headline work, or without credit.
4. Broken demo links, sleeping servers, expired domains.
5. Repositories with no README, no tests and commit messages like "fix" or "asdf".
6. Skill progress bars and long lists of technologies with nothing to back them.
7. Too many projects of mixed quality instead of 3–4 strong ones.
8. Slow loading, heavy animations, autoplaying media or intro screens.
9. Broken layout on mobile.
10. Contact info that's hard to find, or only a contact form.
11. Typos and grammar mistakes — they read as carelessness.
12. Outdated content: old job listed as current, 2019 copyright year, dead links.
13. Inconsistent dates or titles across résumé, site and LinkedIn.
14. Exposing secrets, private employer code or confidential data.
15. Exaggerating your role on team projects.

## 12. Pre-launch checklist and maintenance

Run this checklist before you launch and before every batch of applications.

**Content**

- [ ] A stranger can say what you do in one sentence after 10 seconds on the homepage
- [ ] Name, title, stack and contact visible without scrolling
- [ ] 3–4 featured projects, each with demo, repository and case study
- [ ] Every project shows your role and at least one measurable result
- [ ] Résumé PDF downloads and matches the site and LinkedIn
- [ ] Spelling and grammar checked (read aloud, or use a tool)

**Function**

- [ ] Every link and demo works; demo credentials provided
- [ ] Tested on a phone (iOS Safari, Android Chrome) and desktop browsers
- [ ] Lighthouse 90+ in all categories; Core Web Vitals in the "good" range
- [ ] Keyboard navigation and contrast pass
- [ ] Custom domain with HTTPS; link previews look right on LinkedIn
- [ ] No secrets in any public repository

**Feedback**

- [ ] Reviewed by at least one senior engineer and one non-technical person
- [ ] Five-second test with a friend: ask what you do and what role you want

**Maintenance rhythm**

- **Monthly:** click every link and demo; keep free-tier services awake.
- **Quarterly:** update experience, add new work or writing, refresh dependencies.
- **Each application:** reorder featured projects to match the role.
- **Yearly:** prune weak projects, renew the domain, revisit the design.

## Sources

- [Developer Portfolio Checklist: 20 Things Hiring Managers Look For — DevPlaybook](https://devplaybook.cc/blog/developer-portfolio-checklist-20-things-hiring-managers)
- [How to Evaluate Software Engineering Talent — SOLTECH (Linda Wiesen)](https://soltech.net/how-to-evaluate-software-engineering-talent-a-guide-for-hr-leaders/)
- [Portfolio Content for Tech Jobs: What Recruiters Want — scale.jobs](https://scale.jobs/blog/portfolio-content-for-tech-jobs-what-recruiters-want)
- [How Recruiters Evaluate Your Digital Portfolio — Fueler](https://fueler.io/blog/how-recruiters-evaluate-your-digital-portfolio)
- [Web Vitals — web.dev (Google)](https://web.dev/articles/vitals)

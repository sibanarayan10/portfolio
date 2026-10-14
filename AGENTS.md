<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep all profile, project, skill, experience, and article content in src/data/portfolio.ts so factual updates never require layout changes.
- Use shared portfolio sections on the homepage and dedicated content routes; project case studies use /projects/$slug for shareable, metadata-rich stories.
- Keep the existing TanStack Start React framework for production hosting; do not introduce a second router.
- Contact submissions use a configurable public form-service endpoint with server-side validation; when unconfigured, show an honest unsent state rather than storing or pretending to send messages.
- Theme styling is centralized in src/styles.css and selected client-side with OS preference fallback and localStorage persistence.

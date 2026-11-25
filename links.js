// Paste each project's Render URL (and repository URL, when available) here.
const projectLinks = {
  tracepredict: { demo: "", repository: "https://github.com/jaanhavik777/TracePredict" },
  specmind: { demo: "", repository: "https://github.com/jaanhavik777/SpecMind" },
  chordcloud: { demo: "", repository: "https://github.com/jaanhavik777/ChordCloud" },
};

for (const actions of document.querySelectorAll("[data-project]")) {
  const links = projectLinks[actions.dataset.project];
  for (const anchor of actions.querySelectorAll("[data-link]")) {
    const url = links[anchor.dataset.link];
    if (!URL.canParse(url) || new URL(url).protocol !== "https:") continue;
    anchor.href = url;
    anchor.hidden = false;
    if (anchor.dataset.link === "demo") {
      actions.querySelector("[data-demo-pending]").hidden = true;
    }
  }
}

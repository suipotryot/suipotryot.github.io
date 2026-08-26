const projects = [
  {
    name: "Boxes.js",
    description: "Générateur local de plans de découpe laser pour boîtes à cloisons, inspiré de boxes.py TrayLayout.",
    url: "boxes/",
    kind: "Outil web",
  },
  {
    name: "ConceptConstructif",
    description: "Outil de chiffrage BTP : dessin 2D interactif, visualisation 3D et estimation automatique des coûts de construction.",
    url: "concept-constructif/",
    kind: "Outil web",
  },
  {
    name: "SketchupMenuiseriesMaker",
    description: "Extension SketchUp pour générer des menuiseries extérieures à fabriquer soi-même avec des outils électro-portatifs.",
    url: "sketchup-menuiseries-maker/",
    kind: "Extension SketchUp",
  },
];

function createProjectCard(project) {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = project.url;

  const kind = document.createElement("span");
  kind.className = "project-kind";
  kind.textContent = project.kind;

  const title = document.createElement("h2");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  card.append(kind, title, description);
  return card;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  if (projects.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Les projets arrivent bientôt.";
    grid.append(empty);
    return;
  }

  for (const project of projects) {
    grid.append(createProjectCard(project));
  }
}

renderProjects();

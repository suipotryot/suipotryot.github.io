const projects = [
  {
    name: "Boxes.js",
    description: "Local laser-cutting layout generator for finger-jointed boxes, inspired by boxes.py's TrayLayout.",
    url: "boxes/",
    kind: "Web tool",
  },
  {
    name: "ConceptConstructif",
    description: "Construction cost estimator: interactive 2D drawing, 3D visualization, and automatic cost estimation.",
    url: "concept-constructif/",
    kind: "Web tool",
  },
  {
    name: "SketchupMenuiseriesMaker",
    description: "SketchUp extension to generate exterior joinery you can build yourself with power tools.",
    url: "sketchup-menuiseries-maker/",
    kind: "SketchUp extension",
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
    empty.textContent = "More projects coming soon.";
    grid.append(empty);
    return;
  }

  for (const project of projects) {
    grid.append(createProjectCard(project));
  }
}

renderProjects();

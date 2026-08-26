const projects = [];

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

document.addEventListener("DOMContentLoaded", function() {
  const projects = [
    { title: "Project 1", description: "Description of project 1" },
    { title: "Project 2", description: "Description of project 2" },
    { title: "Project 3", description: "Description of project 3" }
  ];

  const projectList = document.getElementById('project-list');

  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(projectItem);
  });

  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Message from ${name} (${email}):\n\n${message}`);
  });
});

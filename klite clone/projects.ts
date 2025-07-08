interface Project {
  imageUrl: string;
  title: string;
  city: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=48",
    title: "City Park",
    city: "Plaza,Jaipur",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=48"
  },
  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=18",
    title: "Ashok Leyland, Auditorium",
    city: "Chennai, Tamil Nadu",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=18"
  },
  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=20",
    title: "Munnar Botanical Garden",
    city: "Munnar, Kerala",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=20"
  },

  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=1",
    title: "Gmada Golden Temple",
    city: "Amritsar ., Punjab",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=1"
  },
  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=5",
    title: "Courtyard by Marriott Madurai",
    city: "Madurai, Tamil Nadu",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=5"
  },

  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=48",
    title: "City Park",
    city: "Plaza,Jaipur",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=48"
  },
  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=18",
    title: "Ashok Leyland, Auditorium",
    city: "Chennai, Tamil Nadu",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=18"
  },
  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=20",
    title: "Munnar Botanical Garden",
    city: "Munnar, Kerala",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=20"
  },

  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=1",
    title: "Gmada Golden Temple",
    city: "Amritsar ., Punjab",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=1"
  },
  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=5",
    title: "Courtyard by Marriott Madurai",
    city: "Madurai, Tamil Nadu",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=5"
  },
  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=48",
    title: "City Park",
    city: "Plaza,Jaipur",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=48"
  },
  {
    imageUrl: "https://klite.in/ImageHandler.ashx?PIDNew=18",
    title: "Ashok Leyland, Auditorium",
    city: "Chennai, Tamil Nadu",
    projectUrl: "https://klite.in/Projects.aspx?ProjectID=18"
  },
];

const container = document.getElementById("card-container");

if (container) {
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => {
      window.open(project.projectUrl, "_blank");
    };

    card.innerHTML = `
      <img src="${project.imageUrl}" alt="${project.title}">
      <div class="card-details">
        <h3>${project.title}</h3>
        <p>${project.city}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

const content = {
  navbarTitle: "Portfolio",
  navbarElements: ["Home", "About Me", "Projects"],
  navbarElementDestinations: [
    "https://www.google.com/",
    "https://www.youtube.com/",
    "#"
  ],
  footerTitle: "Portfolio",
  footerLinks: ["GitHub", "LinkedIn"],
  footerLinkDestinations: [
    "https://github.com/MuhsinunCool",
    "https://www.linkedin.com/in/muhsinun-chowdhury-95737a136/"
  ]
};

const app = document.getElementById("app");
const navbar = document.getElementById("navbar");

let navbarContents = "";

// Display navbar items with destinations.
for (let i = 0; i < content.navbarElements.length; i++) {
  navbarContents += `
    <a href="${content.navbarElementDestinations[i]}">
      ${content.navbarElements[i]}
    </a>
  `;
  if (i !== content.navbarElements.length - 1) {
    navbarContents += " | ";
  }
}
navbar.innerHTML = `
  <nav>
    ${navbarContents}
  </nav>
`;

app.innerHTML = `
<h1>${content.navbarTitle}</h1>
`;

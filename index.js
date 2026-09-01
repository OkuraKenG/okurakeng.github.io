console.log("yo");

const tabs = [
  {
    tabName: "Today",
    type: "role",
    roles: [
      {
        roleName: "Full Time Software Developer",
        companyName: "IBM",
        startDate: "June 2026",
        endDate: "Present",
      },
      {
        roleName: "Senior Student Software Engineer",
        companyName: "Blue CoLab",
        startDate: "January 2025",
        endDate: "Present",
      },
    ],
  },
  {
    tabName: "Previously @",
    type: "role",
    roles: [
      {
        roleName: "Software Development Intern",
        companyName: "IBM",
        startDate: "May 2025",
        endDate: "June 2026",
      },
      {
        roleName: "Full Stack Developer",
        companyName: "Phormulary",
        startDate: "March 2024",
        endDate: "October 2024",
        href: "https://www.linkedin.com/company/phormulary/",
      },
      {
        roleName: "Technical Instructor",
        companyName: "Iona University Science and Technology Entry Program",
        startDate: "July 2023",
        endDate: "May 2025",
        href: "https://www.iona.edu/admissions-financial-aid/high-school-student-programs-iona-university/science-and-technology-entry",
      },
      {
        roleName: "Computer Science Content Tutor",
        companyName: "Pace University Learning Commons",
        startDate: "May 2022",
        endDate: "May 2024",
        href: "https://www.pace.edu/learning-commons",
      },
    ],
  },
  {
    tabName: "Contact",
    type: "contact",
    contacts: [
      {
        contactLabel: "Email",
        href: "mailto:okurakeng@gmail.com",
        contactValue: "okurakeng@gmail.com",
      },
      {
        contactLabel: "LinkedIn",
        href: "https://www.linkedin.com/in/kenji-okura/",
        contactValue: "kenji-okura",
      },
      {
        contactLabel: "GitHub",
        href: "https://github.com/okurakeng",
        contactValue: "okurakeng",
      },
    ],
  },
];

function createRoleTab(tab) {
  const viewDiv = document.getElementById("view");
  viewDiv.innerHTML = "";
  const rolesTemplate = document.getElementById("roles-template");

  const rolesDiv = rolesTemplate.content.cloneNode(true);
  rolesDiv.getElementById("tab-name").textContent = tab.tabName;

  const rolesUl = document.createElement("ul");
  for (const role of tab.roles) {
    const roleTemplate = role.href
      ? document.getElementById("role-template-href")
      : document.getElementById("role-template");
    const roleLi = roleTemplate.content.cloneNode(true);
    roleLi.querySelector(".role-name").textContent = role.roleName;
    roleLi.querySelector(".company-name").textContent = role.companyName;
    roleLi.querySelector(".start-date").textContent = role.startDate;
    roleLi.querySelector(".end-date").textContent = role.endDate;
    if (role.href) {
      roleLi.querySelector(".company-name").href = role.href;
    }
    rolesUl.appendChild(roleLi);
  }

  rolesDiv.appendChild(rolesUl);
  viewDiv.appendChild(rolesDiv);
}

function createContactTab(tab) {
  const viewDiv = document.getElementById("view");
  viewDiv.innerHTML = "";
  const contactsTemplate = document.getElementById("contacts-template");
  const contactsDiv = contactsTemplate.content.cloneNode(true);

  const contactTemplate = document.getElementById("contact-template");

  const contactsUl = document.createElement("ul");
  for (const contact of tab.contacts) {
    const contactLi = contactTemplate.content.cloneNode(true);
    const contactAnchor = contactLi.querySelector(".contact-value");
    const contactSpan = contactLi.querySelector("span.contact-value");
    contactAnchor.textContent = contact.contactLabel;
    contactAnchor.href = contact.href;
    contactSpan.textContent = contact.contactValue;
    contactsUl.appendChild(contactLi);
  }

  contactsDiv.appendChild(contactsUl);
  viewDiv.appendChild(contactsDiv);
}

function createView(tabName) {
  const tab = tabs.find((t) => t.tabName === tabName);
  switch (tab.type) {
    case "role":
      createRoleTab(tab);
      break;
    case "contact":
      createContactTab(tab);
      break;
    default:
      console.log(`Unknown tab type: ${tab.type}`);
  }
}

function main() {
  const tabsDiv = document.getElementById("tabs");

  for (const tab of tabs) {
    const currentTab = document.createElement("div");
    currentTab.textContent = tab.tabName;
    currentTab.id = tab.tabName.toLowerCase();
    currentTab.classList.add("tab");
    currentTab.addEventListener("click", () => {
      for (const tab of tabsDiv.children) {
        tab.classList.remove("active");
      }
      currentTab.classList.add("active");
      createView(tab.tabName);
    });

    tabsDiv.appendChild(currentTab);
  }
  tabsDiv.children[0].classList.add("active");
  createView(tabs[0].tabName);
}

main();

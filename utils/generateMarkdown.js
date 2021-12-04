// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return "";
  }

  return `[![License](https://img.shields.io/badge/License-${license}.svg)]`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = [
    {
      license: "MIT",
      link: "https://opensource.org/licenses/MIT"
    },
    {
      license: "GPLv2",
      link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
    },
    {
      license: "Apache",
      link: "https://opensource.org/licenses/Apache-2.0"
    },
  ];

  if(!license) {
    return "";
  }
  
  for(let i = 0; i < licenses.length; i++) {
    if(license === licenses[i].license) {
      return `(${licenses[i].link})`
    };
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return "";
  }

  return `
    # License #
    This application is covered under ${license}
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, languages, install, usage, test, contributor, license, github, email } = data
  const markdown = `# ${title} #
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}

    # Description #
    - ${description}
    - Made using: ${languages}

    # Installation #
    - ${install}

    # Usage #
    - ${usage}

    # Testing #
    - ${test}

    # Contributors #
    Made by: ${contributor}

    # Feedback #
    GitHub Profile: ${github}
    E-Mail: ${email}

    ${renderLicenseSection(license)}
  `;

  return [title, markdown];
};


module.exports = generateMarkdown;
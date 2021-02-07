
// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![badge](https://img.shields.io/badge/license-${data.license}-green)
 
  ## Description
  \`\`\`

  ${data.description};

  \`\`\`

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contribution](#contribution)

  * [Tests](#tests)

  * [License](#license)

  * [Questions](#questions)


  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ## Contribution 

  To contribute to this project, ${data.contribution}

  ## Tests

  To run tests, use:
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-green)

  This application is covered under ${data.license} licensing.

  ## Questions

  If you have additional questions, please email me at ${data.email}.

  Connect with me on GitHub! : [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;

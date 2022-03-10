const markdownLicense = ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "CC0", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International", "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International", "Eclipse Public License 1.0", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "The Hippocratic License 2.1", "The Hippocratic License 3.0", "IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", "Attribution License (BY)", "Open Database License (ODbL)", "Public Domain Dedication and License (PDDL)", "The Perl License", "The Artistic License 2.0", "SIL Open Font License 1.1", "The Unlicense", "WTFPL", "The zlib/libpng License"]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case markdownLicense[0]: 
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case markdownLicense[1]: 
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case markdownLicense[2]: 
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case markdownLicense[3]: 
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case markdownLicense[4]: 
      return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
      break;
    case markdownLicense[5]: 
      return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
      break;
    case markdownLicense[6]: 
      return "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
      break;
    case markdownLicense[7]: 
      return "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
      break;
    case markdownLicense[8]: 
      return "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
      break;
    case markdownLicense[9]: 
      return "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
      break;
    case markdownLicense[10]: 
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case markdownLicense[11]: 
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case markdownLicense[12]: 
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case markdownLicense[13]: 
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case markdownLicense[14]: 
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case markdownLicense[15]: 
      return "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
      break;
    case markdownLicense[16]: 
      return "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
      break;
    case markdownLicense[17]: 
      return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
      break;
    case markdownLicense[18]: 
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case markdownLicense[19]: 
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case markdownLicense[20]: 
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case markdownLicense[21]: 
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case markdownLicense[22]: 
      return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      break;
    case markdownLicense[23]: 
      return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
      break;
    case markdownLicense[24]: 
      return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
      break;
    case markdownLicense[25]: 
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case markdownLicense[26]: 
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case markdownLicense[27]: 
      return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      break;
    case markdownLicense[28]: 
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case markdownLicense[29]: 
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      break;
    case markdownLicense[30]: 
      return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      break;
    default:
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case markdownLicense[0]: 
      return "[${markdownLicense[0]}](https://opensource.org/licenses/Apache-2.0)";
      break;
    case markdownLicense[1]: 
      return "[${markdownLicense[1]}](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case markdownLicense[2]: 
      return "[${markdownLicense[2]}](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case markdownLicense[3]: 
      return "[${markdownLicense[3]}](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case markdownLicense[4]: 
      return "[${markdownLicense[4]}](https://creativecommons.org/licenses/by/4.0/)";
      break;
    case markdownLicense[5]: 
      return "[${markdownLicense[5]}](https://creativecommons.org/licenses/by-sa/4.0/)";
      break;
    case markdownLicense[6]: 
      return "[${markdownLicense[6]}](https://creativecommons.org/licenses/by-nc/4.0/)";
      break;
    case markdownLicense[7]: 
      return "[${markdownLicense[7]}](https://creativecommons.org/licenses/by-nd/4.0/)";
      break;
    case markdownLicense[8]: 
      return "[${markdownLicense[8]}](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
      break;
    case markdownLicense[9]: 
      return "[${markdownLicense[9]}](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
      break;
    case markdownLicense[10]: 
      return "[${markdownLicense[10]}](https://opensource.org/licenses/EPL-1.0)";
      break;
    case markdownLicense[11]: 
      return "[${markdownLicense[11]}](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case markdownLicense[12]: 
      return "[${markdownLicense[12]}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case markdownLicense[13]: 
      return "[${markdownLicense[13]}](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case markdownLicense[14]: 
      return "[${markdownLicense[14]}](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case markdownLicense[15]: 
      return "[${markdownLicense[15]}](https://www.gnu.org/licenses/fdl-1.3)";
      break;
    case markdownLicense[16]: 
      return "[${markdownLicense[16]}](https://firstdonoharm.dev)";
      break;
    case markdownLicense[17]: 
      return "[${markdownLicense[17]}](https://firstdonoharm.dev)";
      break;
    case markdownLicense[18]: 
      return "[${markdownLicense[18]}](https://opensource.org/licenses/IPL-1.0)";
      break;
    case markdownLicense[19]: 
      return "[${markdownLicense[19]}](https://opensource.org/licenses/ISC)";
      break;
    case markdownLicense[20]: 
      return "[${markdownLicense[20]}](https://opensource.org/licenses/MIT)";
      break;
    case markdownLicense[21]: 
      return "[${markdownLicense[21]}](https://opensource.org/licenses/MPL-2.0)";
      break;
    case markdownLicense[22]: 
      return "[${markdownLicense[22]}](https://opendatacommons.org/licenses/by/)";
      break;
    case markdownLicense[23]: 
      return "[${markdownLicense[23]}](https://opendatacommons.org/licenses/odbl/)";
      break;
    case markdownLicense[24]: 
      return "[${markdownLicense[24]}](https://opendatacommons.org/licenses/pddl/)";
      break;
    case markdownLicense[25]: 
      return "[${markdownLicense[25]}](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case markdownLicense[26]: 
      return "[${markdownLicense[26]}](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case markdownLicense[27]: 
      return "[${markdownLicense[27]}](https://opensource.org/licenses/OFL-1.1)";
      break;
    case markdownLicense[28]: 
      return "[${markdownLicense[28]}](http://unlicense.org/)";
      break;
    case markdownLicense[29]: 
      return "[${markdownLicense[29]}](http://www.wtfpl.net/about/)";
      break;
    case markdownLicense[30]: 
      return "[${markdownLicense[30]}](https://opensource.org/licenses/Zlib)";
      break;
    default:
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case markdownLicense[0]: 
      return "[Read more about ${markdownLicense[0]}]]:";
      break;
    case markdownLicense[1]: 
      return "[Read more about ${markdownLicense[1]}]]:";
      break;
    case markdownLicense[2]: 
      return "[Read more about ${markdownLicense[2]}]]:";
      break;
    case markdownLicense[3]: 
      return "[Read more about ${markdownLicense[3]}]]:";
      break;
    case markdownLicense[4]: 
      return "[Read more about ${markdownLicense[4]}]]:";
      break;
    case markdownLicense[5]: 
      return "[Read more about ${markdownLicense[5]}]]:";
      break;
    case markdownLicense[6]: 
      return "[Read more about ${markdownLicense[6]}]]:";
      break;
    case markdownLicense[7]: 
      return "[Read more about ${markdownLicense[7]}]]:";
      break;
    case markdownLicense[8]: 
      return "[Read more about ${markdownLicense[8]}]]:";
      break;
    case markdownLicense[9]: 
      return "[Read more about ${markdownLicense[9]}]]:";
      break;
    case markdownLicense[10]: 
      return "[Read more about ${markdownLicense[10]}]]:";
      break;
    case markdownLicense[11]: 
      return "[Read more about ${markdownLicense[11]}]]:";
      break;
    case markdownLicense[12]: 
      return "[Read more about ${markdownLicense[12]}]]:";
      break;
    case markdownLicense[13]: 
      return "[Read more about ${markdownLicense[13]}]]:";
      break;
    case markdownLicense[14]: 
      return "[Read more about ${markdownLicense[14]}]]:";
      break;
    case markdownLicense[15]: 
      return "[Read more about ${markdownLicense[15]}]]:";
      break;
    case markdownLicense[16]: 
      return "[Read more about ${markdownLicense[16]}]]:";
      break;
    case markdownLicense[17]: 
      return "[Read more about ${markdownLicense[17]}]]:";
      break;
    case markdownLicense[18]: 
      return "[Read more about ${markdownLicense[18]}]]:";
      break;
    case markdownLicense[19]: 
      return "[Read more about ${markdownLicense[19]}]]:";
      break;
    case markdownLicense[20]: 
      return "[Read more about ${markdownLicense[20]}]]:";
      break;
    case markdownLicense[21]: 
      return "[Read more about ${markdownLicense[21]}]]:";
      break;
    case markdownLicense[22]: 
      return "[Read more about ${markdownLicense[22]}]]:";
      break;
    case markdownLicense[23]: 
      return "[Read more about ${markdownLicense[23]}]]:";
      break;
    case markdownLicense[24]: 
      return "[Read more about ${markdownLicense[24]}]]:";
      break;
    case markdownLicense[25]: 
      return "[Read more about ${markdownLicense[25]}]]:";
      break;
    case markdownLicense[26]: 
      return "[Read more about ${markdownLicense[26]}]]:";
      break;
    case markdownLicense[27]: 
      return "[Read more about ${markdownLicense[27]}]]:";
      break;
    case markdownLicense[28]: 
      return "[Read more about ${markdownLicense[28]}]]:";
      break;
    case markdownLicense[29]: 
      return "[Read more about ${markdownLicense[29]}]]:";
      break;
    case markdownLicense[30]: 
      return "[Read more about ${markdownLicense[30]}]]:";
      break;
    default:
      return ""
  }
}

// Function to generate markdown for README.
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing] (#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}
  
  ## Tests
  ${data.test}

  ## Questions
  ### Contact me:
  [${data.username}](https://github.com/${data.username})
  ${data.email}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
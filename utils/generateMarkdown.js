const markdownLicense = ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "CC0", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International", "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International", "Eclipse Public License 1.0", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "The Hippocratic License 2.1", "The Hippocratic License 3.0", "IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", "Attribution License (BY)", "Open Database License (ODbL)", "Public Domain Dedication and License (PDDL)", "The Perl License", "The Artistic License 2.0", "SIL Open Font License 1.1", "The Unlicense", "WTFPL", "The zlib/libpng License"]

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
      return "[click here!](https://opensource.org/licenses/Apache-2.0)";
      break;
    case markdownLicense[1]: 
      return "[click here!](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case markdownLicense[2]: 
      return "[click here!](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case markdownLicense[3]: 
      return "[click here!](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case markdownLicense[4]: 
      return "[click here!](https://creativecommons.org/licenses/by/4.0/)";
      break;
    case markdownLicense[5]: 
      return "[click here!](https://creativecommons.org/licenses/by-sa/4.0/)";
      break;
    case markdownLicense[6]: 
      return "[click here!](https://creativecommons.org/licenses/by-nc/4.0/)";
      break;
    case markdownLicense[7]: 
      return "[click here!](https://creativecommons.org/licenses/by-nd/4.0/)";
      break;
    case markdownLicense[8]: 
      return "[click here!](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
      break;
    case markdownLicense[9]: 
      return "[click here!](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
      break;
    case markdownLicense[10]: 
      return "[click here!](https://opensource.org/licenses/EPL-1.0)";
      break;
    case markdownLicense[11]: 
      return "[click here!](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case markdownLicense[12]: 
      return "[click here!](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case markdownLicense[13]: 
      return "[click here!](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case markdownLicense[14]: 
      return "[click here!](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case markdownLicense[15]: 
      return "[click here!](https://www.gnu.org/licenses/fdl-1.3)";
      break;
    case markdownLicense[16]: 
      return "[click here!](https://firstdonoharm.dev)";
      break;
    case markdownLicense[17]: 
      return "[click here!](https://firstdonoharm.dev)";
      break;
    case markdownLicense[18]: 
      return "[click here!](https://opensource.org/licenses/IPL-1.0)";
      break;
    case markdownLicense[19]: 
      return "[click here!](https://opensource.org/licenses/ISC)";
      break;
    case markdownLicense[20]: 
      return "[click here!](https://opensource.org/licenses/MIT)";
      break;
    case markdownLicense[21]: 
      return "[click here!](https://opensource.org/licenses/MPL-2.0)";
      break;
    case markdownLicense[22]: 
      return "[click here!](https://opendatacommons.org/licenses/by/)";
      break;
    case markdownLicense[23]: 
      return "[click here!](https://opendatacommons.org/licenses/odbl/)";
      break;
    case markdownLicense[24]: 
      return "[click here!](https://opendatacommons.org/licenses/pddl/)";
      break;
    case markdownLicense[25]: 
      return "[click here!](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case markdownLicense[26]: 
      return "[click here!](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case markdownLicense[27]: 
      return "[click here!](https://opensource.org/licenses/OFL-1.1)";
      break;
    case markdownLicense[28]: 
      return "[click here!](http://unlicense.org/)";
      break;
    case markdownLicense[29]: 
      return "[click here!](http://www.wtfpl.net/about/)";
      break;
    case markdownLicense[30]: 
      return "[click here!](https://opensource.org/licenses/Zlib)";
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
      return "For more information on Apache 2.0 License:";
      break;
    case markdownLicense[1]: 
      return "For more information on Boost Software License 1.0:";
      break;
    case markdownLicense[2]: 
      return "For more information on BSD 3-Clause License:";
      break;
    case markdownLicense[3]: 
      return "For more information on CC0:";
      break;
    case markdownLicense[4]: 
      return "For more information on Attribution 4.0 International:";
      break;
    case markdownLicense[5]: 
      return "For more information on Attribution-ShareAlike 4.0 International:";
      break;
    case markdownLicense[6]: 
      return "For more information on Attribution-NonCommercial 4.0 International:";
      break;
    case markdownLicense[7]: 
      return "For more information on Attribution-NoDerivates 4.0 International:";
      break;
    case markdownLicense[8]: 
      return "For more information on Attribution-NonCommmercial-ShareAlike 4.0 International:";
      break;
    case markdownLicense[9]: 
      return "For more information on Attribution-NonCommercial-NoDerivatives 4.0 International:";
      break;
    case markdownLicense[10]: 
      return "For more information on Eclipse Public License 1.0:";
      break;
    case markdownLicense[11]: 
      return "For more information on GNU GPL v3:";
      break;
    case markdownLicense[12]: 
      return "For more information on GNU GPL v2:";
      break;
    case markdownLicense[13]: 
      return "For more information on GNU AGPL v3:";
      break;
    case markdownLicense[14]: 
      return "For more information on GNU LGPL v3:";
      break;
    case markdownLicense[15]: 
      return "For more information on GNU FDL v1.3:";
      break;
    case markdownLicense[16]: 
      return "For more information on The Hippocratic License 2.1:";
      break;
    case markdownLicense[17]: 
      return "For more information on The Hippocratic License 3.0:";
      break;
    case markdownLicense[18]: 
      return "For more information on IBM Public License Version 1.0:";
      break;
    case markdownLicense[19]: 
      return "For more information on ISC License (ISC):";
      break;
    case markdownLicense[20]: 
      return "For more information on The MIT License:";
      break;
    case markdownLicense[21]: 
      return "For more information on Mozilla Public License 2.0:";
      break;
    case markdownLicense[22]: 
      return "For more information on Attribution License (BY):";
      break;
    case markdownLicense[23]: 
      return "For more information on Open Database License (ODbL):";
      break;
    case markdownLicense[24]: 
      return "For more information on Public Domain Dedication and License (PDDL):";
      break;
    case markdownLicense[25]: 
      return "For more information on The Perl License:";
      break;
    case markdownLicense[26]: 
      return "For more information on The Artistic License 2.0:";
      break;
    case markdownLicense[27]: 
      return "For more information on SIL Open Font License 1.1:";
      break;
    case markdownLicense[28]: 
      return "For more information on The Unlicense:";
      break;
    case markdownLicense[29]: 
      return "For more information on WTFPL:";
      break;
    case markdownLicense[30]: 
      return "For more information on The zlib/libpng License:";
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
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}
  
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
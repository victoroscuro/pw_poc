async function findSections(linkName, jsonData) {
    let result = { maintab: null, subsection: null };
  
    if (jsonData.navigation && Array.isArray(jsonData.navigation.sections)) {

        jsonData.navigation.sections.some((section) => {

            if (section.subsections && Array.isArray(section.subsections)) {

                return section.subsections.some((subsection) => {

                    if (subsection.links && Array.isArray(subsection.links)) {

                        return subsection.links.some((link) => {

                            if (link.name === linkName) {

                                result.maintab = jsonData.navigation.maintab;

                                result.subsection = subsection.name;

                                return true;
                }
                return false;
              });
            }
            return false;
          });
        }
        return false;
      });
    }
  
    return result;
  }
  export default findSections;
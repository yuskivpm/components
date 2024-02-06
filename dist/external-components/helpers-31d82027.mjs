window["ActindoCoreUI"].httpClient;
window["VueI18n"].useI18n;
const getFormElementLabel = (languageName, scopeName, attribute) => {
  let ret = attribute.name;
  if (!attribute.scopable && !attribute.multilanguage) {
    return ret;
  }
  ret = ret + " (";
  if (attribute.scopable && attribute.multilanguage) {
    ret = `${ret}${languageName}|${scopeName}`;
  } else if (attribute.multilanguage) {
    ret = `${ret}${languageName}`;
  } else {
    ret = `${ret}${scopeName}`;
  }
  ret = ret + ")";
  return ret;
};
export {
  getFormElementLabel as g
};
//# sourceMappingURL=helpers-31d82027.mjs.map

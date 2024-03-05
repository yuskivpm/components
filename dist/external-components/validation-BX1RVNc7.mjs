const useNumberValidation = (value, { max, min } = {}) => {
  if (isNaN(value)) {
    return "datahub-plugin.floatValue.errorEnterNumber";
  }
  if (!min && !max) {
    return "";
  }
  if (min && !max && value < min) {
    return "datahub-plugin.floatValue.minAutoValidation";
  }
  if (max && !min && value > max) {
    return "datahub-plugin.floatValue.maxAutoValidation";
  }
  if (value < min || value > max) {
    return "datahub-plugin.floatValue.minMaxAutoValidation";
  }
  return "";
};
export {
  useNumberValidation as u
};
//# sourceMappingURL=validation-BX1RVNc7.mjs.map

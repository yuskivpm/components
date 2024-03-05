const useNumberValidation = (value, { max, min } = {}) => {
  if (isNaN(value)) {
    return "datahub-plugin.numbers.errorEnterNumber";
  }
  if (!min && !max) {
    return "";
  }
  if (min && !max && value < min) {
    return "datahub-plugin.numbers.minAutoValidation";
  }
  if (max && !min && value > max) {
    return "datahub-plugin.numbers.maxAutoValidation";
  }
  if (value < min || value > max) {
    return "datahub-plugin.numbers.minMaxAutoValidation";
  }
  return "";
};
export {
  useNumberValidation as u
};
//# sourceMappingURL=validation-CWivDsBd.mjs.map

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
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "datahub-plugin": {
          "numbers": {
            "errorEnterNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["You must enter a number"]);
            },
            "minMaxAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["must be between ", _interpolate(_named("min")), " and ", _interpolate(_named("max"))]);
            },
            "minAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["must be greater than ", _interpolate(_named("min"))]);
            },
            "maxAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["must be lower than ", _interpolate(_named("max"))]);
            }
          }
        }
      },
      "de": {
        "datahub-plugin": {
          "numbers": {
            "errorEnterNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Bitte geben Sie eine Zahl ein"]);
            },
            "minMaxAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["TODO: must be between ", _interpolate(_named("min")), " and ", _interpolate(_named("max"))]);
            },
            "minAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["TODO: must be greater than ", _interpolate(_named("min"))]);
            },
            "maxAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["TODO: must be lower than ", _interpolate(_named("max"))]);
            }
          }
        }
      }
    }
  });
}
export {
  block0 as b,
  useNumberValidation as u
};
//# sourceMappingURL=numbers.json_vue_type_i18n_index_0_src_true_lang-CrwrwVyQ.mjs.map

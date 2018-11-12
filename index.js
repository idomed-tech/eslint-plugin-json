'use strict';

const has = require('has');

const allRules = {
  'no-json-stringify': require('./lib/rules/no-json-stringify'), // eslint-disable-line global-require
  'try-json-parse': require('./lib/rules/try-json-parse') // eslint-disable-line global-require
};

function filterRules (rules, predicate) {
  const result = {};
  for (const key in rules) {
    if (has(rules, key) && predicate(rules[key])) {
      result[key] = rules[key];
    }
  }
  return result;
}

function configureAsError (rules) {
  const result = {};
  for (const key in rules) {
    if (!has(rules, key)) {
      continue;
    }
    result[`json/${key}`] = 2;
  }
  return result;
}

const activeRules = filterRules(allRules, rule => !rule.meta.deprecated);
const activeRulesConfig = configureAsError(activeRules);

const deprecatedRules = filterRules(allRules, rule => rule.meta.deprecated);

module.exports = {
  deprecatedRules: deprecatedRules,
  rules: allRules,
  configs: {
    recommended: {
      plugins: [
        'json'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'json/no-json-stringify': 2,
        'json/try-json-parse': 2
      }
    },
    all: {
      plugins: [
        'json'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: activeRulesConfig
    }
  }
};

'use strict';

module.exports = {
  meta: {
    type: 'problem',
    description: 'disallow use of injection-prone JSON.stringify',
    deprecated: false
  },
  create: function (context) {
    return {

      MemberExpression: function (node) {
        if (node.object.name === 'JSON') {
          if (node.property.name === 'stringify') {
            context.report(node, '`serialize` function of package `serialize-javascript` should be used instead of JSON.stringify', {});
          }
        }
      }
    };
  }
};

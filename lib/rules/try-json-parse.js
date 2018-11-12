'use strict';

module.exports = {
  meta: {
    type: 'suggestion',
    description: 'wrap JSON.parse calls in a try block',
    deprecated: false
  },
  create: function (context) {
    return {

      MemberExpression: function (node) {
        if (node.object.name === 'JSON') {
          if (node.property.name === 'parse') {
            if (context.getAncestors().filter(n => n.type === 'TryStatement').length === 0) context.report(node, 'JSON.parse calls should be wrapped in a try block', {});
          }
        }
      }
    };
  }
};

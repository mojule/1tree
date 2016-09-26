"use strict";

module.exports = {
  wrap: function wrap(fn, root, node, newNode) {
    var parent = fn.getParent(fn, root, node);

    fn.insertBefore(fn, root, parent, newNode, node);
    fn.append(fn, root, newNode, node);

    return newNode;
  },
  argTypes: ['fn', 'rootNode', 'node', 'node'],
  returnType: 'node',
  requires: ['getParent', 'insertBefore', 'append'],
  categories: ['manipulation']
};
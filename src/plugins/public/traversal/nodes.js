'use strict'

const is = require( '@mojule/is' )

const nodes = ({ api, state, core, privates }) => {
  privates.generatorNames.forEach( name => {
    const generator = privates[ name ]
    const fname = `${ name }Nodes`
    const list = privates.nodeList( generator )

    Object.defineProperty( api, fname, {
      get: () => list
    })
  })
}

module.exports = nodes

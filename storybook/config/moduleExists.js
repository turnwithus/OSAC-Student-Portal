const path = require('path');
const fs = require('fs');
const dashify = require('dashify');

const blocks = fs.readdirSync(path.join(__dirname, '../src/stories/blocks'));
const comps = fs.readdirSync(path.join(__dirname, '../src/stories/components'));
const layouts = fs.readdirSync(path.join(__dirname, '../src/stories/layouts'));
const pgs = fs.readdirSync(path.join(__dirname, '../src/stories/pages'));
const all = blocks.concat(comps, layouts, pgs);

/**
 * moduleExists
 *
 * Check whether the given component already exists
 */

const moduleExists = (comp) => {
  const kebabComp = dashify(comp);

  switch (kebabComp) {
    case 'Block':
      return blocks.indexOf(kebabComp) >= 0;
    case 'Component':
      return comps.indexOf(kebabComp) >= 0;
    case 'Layout':
      return layouts.indexOf(kebabComp) >= 0;
    case 'Page':
      return pgs.indexOf(kebabComp) >= 0;
    default:
      return all.indexOf(kebabComp) >= 0;
  }
};

module.exports = moduleExists;

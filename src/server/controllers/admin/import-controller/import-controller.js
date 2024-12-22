'use strict';

const getModelAttributes = require('./get-model-attributes');
const importData = require('./import-data');
const convertData = require('./convert-data');

module.exports = ({ strapi }) => ({
  getModelAttributes: getModelAttributes({ strapi }),
  importData: importData({ strapi }),
  convertData: convertData({ strapi }),
});

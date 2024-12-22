'use strict';

const { getModelAttributes } = require('../../../utils/models');

const getModelAttributesEndpoint = async (ctx) => {
  const { slug } = ctx.params;

  const schema = strapi.getModel(slug);
  if (!schema) {
    return [];
  }

  const idField = schema?.pluginOptions?.['import-export-entries']?.idField || 'id'

  const attributeNames = getModelAttributes(slug)
    .filter(filterAttribute)
    .map((attr) => attr.name).filter((attrName) => attrName !== idField);
  attributeNames.unshift(idField);

  if (!attributeNames.includes("id")) {
    attributeNames.push("id")
  }
  ctx.body = {
    data: {
      attribute_names: attributeNames,
    },
  };
};

const filterAttribute = (attr) => {
  const filters = [filterType, filterName];
  return filters.every((filter) => filter(attr));
};

const filterType = (attr) => !['relation', 'component', 'dynamiczone'].includes(attr.type);

const filterName = (attr) => !['createdAt', 'updatedAt', 'publishedAt', 'locale'].includes(attr.name);

module.exports = ({ strapi }) => getModelAttributesEndpoint;

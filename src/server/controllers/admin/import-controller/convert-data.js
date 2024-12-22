import { CustomSlugs } from '../../../config/constants';
import { getAllSlugs } from '../../../utils/models';

const { getService } = require('../../../utils');

module.exports = ({ strapi }) => convertData;

async function convertData(ctx) {
  // if (!hasPermissions(ctx)) {
  //   return ctx.forbidden();
  // }
  console.warn(ctx.request.body, ctx.request.files)
  const { user } = ctx.state;
  const res = await getService('import').convertData(ctx.request.body)

  ctx.body = {
    failures: res.failures,
    data: res.data
  };
}


function hasPermissions(ctx) {
  let { slug } = ctx.request.body;
  const { userAbility } = ctx.state;

  let slugsToCheck = [];
  if (slug === CustomSlugs.WHOLE_DB) {
    slugsToCheck.push(...getAllSlugs());
  } else {
    slugsToCheck.push(slug);
  }

  return slugsToCheck.every((slug) => hasPermissionForSlug(userAbility, slug));
}

function hasPermissionForSlug(userAbility, slug) {
  const permissionChecker = strapi.plugin('content-manager').service('permission-checker').create({ userAbility, model: slug });

  return permissionChecker.can.create() && permissionChecker.can.update();
}

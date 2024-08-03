import '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('lms')
      .service('myService')
      .getWelcomeMessage();
  },
});

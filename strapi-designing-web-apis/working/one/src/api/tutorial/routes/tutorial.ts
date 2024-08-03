/**
 * tutorial router.
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::tutorial.tutorial", {
  except: ["find"],
  only: [],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    update: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    delete: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },
});

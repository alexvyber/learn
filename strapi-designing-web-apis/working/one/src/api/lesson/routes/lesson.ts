/**
 * lesson router.
 */

import { factories } from "@strapi/strapi";

// @ts-ignore
export default factories.createCoreRouter("api::lesson.lesson", {
  except: ["find"],
  config: {
    update: {
      policies: ["is-manager"],
    },
    delete: {
      policies: ["is-manager"],
    },
  },
});

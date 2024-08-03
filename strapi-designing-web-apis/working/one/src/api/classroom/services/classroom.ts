/**
 * classroom service.
 */

import { factories } from "@strapi/strapi";
import { Service } from "@strapi/strapi/lib/core-api/service";

export default factories.createCoreService(
  "api::classroom.classroom",

  ({ strapi }) => ({
    // Method 1: Creating an entirely custom service
    async findTutorials(classroomId) {
      let response = { okay: true };
      strapi.log.debug(`findTutorials: classroomId=${classroomId}`);

      if (response.okay === false) {
        return { response, error: true };
      }

      //   return response;
      return strapi.entityService.findMany("api::tutorial.tutorial", {
        filters: { classroom: classroomId },
        populate: ["classroom", "classroom.manager", "coverImage"],
      });
    },

    // Method 2: Wrapping a core service (leaves core logic in place)
    async find(...args) {
      // Calling the default core controller
      const { results, pagination } = await super.find(...args);

      return { results, pagination };
    },

    // Method 3: Replacing a core service
    // async findOne(entityId, params = {}) {
    //   return strapi.entityService.findOne(
    //     "api::restaurant.restaurant",
    //     entityId,
    //     this.getFetchParams(params)
    //   );
    // },
  })
);

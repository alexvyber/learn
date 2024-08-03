/**
 *  classroom controller
 */

import { factories } from "@strapi/strapi";
import { sanitize } from "@strapi/utils";

export default factories.createCoreController(
  "api::classroom.classroom",
  ({ strapi }) => ({
    // async findTutorials(ctx) {
    //   ctx.response.status = 501;
    //   return "to be implemented";
    // },

    async seed(ctx) {
      try {
        const classroomsPromise = [];
        // Min and Max values to generate random number in range
        const min = 1;
        const max = 30;
        // Number of classrooms to be created
        const numberOfClasses = 50;
        Array(numberOfClasses)
          .fill(null)
          .forEach((_item, index) => {
            const name = `classroom_${index + 1}`;
            // Get random numnber in range of min and max
            const maxStudents = Math.floor(Math.random() * max + min);
            classroomsPromise.push(
              strapi.entityService.create("api::classroom.classroom", {
                data: {
                  name,
                  description: `Description of the classroom ${name}`,
                  maxStudents: maxStudents,
                  publishedAt: Date.now(),
                },
              })

              //   strapi.services("api::classroom.classroom").create({
              //     data: {
              //       name,
              //       description: `Description of the classroom ${name}`,
              //       maxStudents: maxStudents,
              //     },
              //   })
            );
          });
        await Promise.all(classroomsPromise);
        return { message: "Ok" };
      } catch (e) {
        strapi.log.error("Failed to seed the database with error", e.message);
      }
      //   return { shit: "shit" };
    },

    async findTutorials(ctx) {
      ctx.response.status = 501;
      strapi.log.debug(`params: ${JSON.stringify(ctx.params)}`);
      strapi.log.debug(`query: ${JSON.stringify(ctx.query)}`);
      const { params } = ctx;

      const res = await strapi
        .service("api::classroom.classroom")
        // @ts-ignore
        .findTutorials(params.id);

      const model = strapi.getModel("api::tutorial.tutorial");
      const sanitizedResults = await sanitize.contentAPI.output(res, model);
      return this.transformResponse(sanitizedResults);
    },
  })
);

/**
 * `is-manager` policy.
 */

export default async (policyContext, config, { strapi }) => {
  try {
    // Get id from request
    const { id } = policyContext.params;

    // Get the tutorial by id
    const lesson = await strapi
      .service("api::lesson.lesson")
      .findOne(id, { populate: ["classroom.manager"] });

    // current logged in user

    const { user } = policyContext.state;

    // check if classroom manager is logged in user
    const {
      classroom: { manager },
    } = lesson;

    if (manager && manager.id === user.id) {
      return true;
    }

    return false;
  } catch (e) {
    strapi.log.error("Error in is-manager policy", e);
    return false;
  }
};

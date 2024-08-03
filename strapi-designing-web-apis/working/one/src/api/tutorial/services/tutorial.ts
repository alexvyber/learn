/**
 * tutorial service.
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::tutorial.tutorial", () => ({
  // Method 2: Wrapping a core service (leaves core logic in place)
  async find(...args) {
    // Calling the default core controller
    const { results, pagination } = await super.find(...args);

    return { results, pagination };
  },
  generateSummary(data: any) {
    if (data.content) {
      return data.content.substring(0, 200);
    }

    return null;
  },
}));

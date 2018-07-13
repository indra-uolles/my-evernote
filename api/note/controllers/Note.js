'use strict';

/**
 * Note.js controller
 *
 * @description: A set of functions called "actions" for managing `Note`.
 */

module.exports = {

  /**
   * Retrieve note records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.note.fetchAll(ctx.query);
  },

  /**
   * Retrieve a note record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.note.fetch(ctx.params);
  },

  /**
   * Create a/an note record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.note.add(ctx.request.body);
  },

  /**
   * Update a/an note record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.note.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an note record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.note.remove(ctx.params);
  }
};

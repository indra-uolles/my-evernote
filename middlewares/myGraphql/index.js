const {
    graphqlKoa,
    graphiqlKoa
} = require('apollo-server-koa');
const koaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const graphlSchema = require('./graphql-schema');

const router = new koaRouter();
const graphqlMiddleware = graphqlKoa({schema: graphlSchema});
const graphqlEndpoint = '/my-graphql';
const graphiqlEndpoint = '/my-graphiql';

router.post(graphqlEndpoint, koaBody(), graphqlMiddleware);
router.get(graphqlEndpoint, graphqlMiddleware);
router.get(graphiqlEndpoint, graphiqlKoa({endpointURL: graphqlEndpoint}));

module.exports = strapi => {
    return {
        initialize: function(cb) {
            strapi.app.use(router.routes());
            strapi.app.use(router.allowedMethods());

            cb();
        }
    };
};

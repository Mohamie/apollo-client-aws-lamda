import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';
import { AppDataSource } from "./db/data-source.js"
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";

AppDataSource.initialize().then(async () => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
});



const server = new ApolloServer({
    typeDefs,
    resolvers,
});
      

export const graphqlHandler = startServerAndCreateLambdaHandler(
    server,
    // We will be using the Proxy V2 handler
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
  );
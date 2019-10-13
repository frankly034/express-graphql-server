import { GraphQLSchema } from 'graphql';

import RootQuery from './queries';

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;

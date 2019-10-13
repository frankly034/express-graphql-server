import { GraphQLSchema } from 'graphql';

import RootQuery from './queries';
import mutation from './mutations';

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

export default schema;

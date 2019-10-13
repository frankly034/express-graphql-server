import { GraphQLObjectType } from 'graphql';
import ProductQueries from './product';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...ProductQueries,
  },
});

export default RootQuery;

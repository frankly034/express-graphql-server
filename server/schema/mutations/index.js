import { GraphQLObjectType } from 'graphql';

import productMutations from './product';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...productMutations,
  }
});

export default mutation;

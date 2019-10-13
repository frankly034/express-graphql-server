import { GraphQLString, GraphQLInt, GraphQLObjectType } from 'graphql';

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    price: { type: GraphQLInt }
  })
});

export default ProductType;

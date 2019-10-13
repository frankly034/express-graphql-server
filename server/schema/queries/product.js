import axios from 'axios';
import { GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql';
import types from '../types';

const { ProductType } = types;
const baseUrl = 'http://localhost:3000/products';

const product = {
  type: ProductType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    return axios.get(`${baseUrl}/${args.id}`)
      .then((res) => res.data);
  }
};

const products = {
  type: new GraphQLList(ProductType),
  resolve() {
    return axios.get(baseUrl)
      .then((res) => res.data);
  }
};

export default {
  product,
  products,
};

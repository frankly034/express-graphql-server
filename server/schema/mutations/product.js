import axios from 'axios';
import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

import types from '../types';

const { ProductType } = types;
const baseUrl = 'http://localhost:3000/products';

const addProduct = {
  type: ProductType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    imageUrl: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    quantity: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve(parentValue, args) {
    const {
      id,
      name,
      imageUrl,
      description,
      price,
      quantity
    } = args;
    return axios.post(baseUrl, {
      id,
      name,
      imageUrl,
      description,
      price,
      quantity
    }).then((res) => res.data);
  }
};

const editProduct = {
  type: ProductType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    imageUrl: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    quantity: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve(parentValue, args) {
    const {
      id,
      name,
      imageUrl,
      description,
      price,
      quantity
    } = args;
    return axios.patch(`${baseUrl}/${id}`, {
      name,
      imageUrl,
      description,
      price,
      quantity
    }).then((res) => res.data);
  }
};

const deleteProduct = {
  type: ProductType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parentValue, args) {
    const { id } = args;
    return axios.delete(`${baseUrl}/${id}`)
      .then((res) => res.data);
  }
};

export default {
  addProduct,
  editProduct,
  deleteProduct,
};

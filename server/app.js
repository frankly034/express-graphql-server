import express from 'express';
import expressGraphQL from 'express-graphql';

import schema from './schema';

const port = process.env.PORT || 8000;
const app = express();

app.all('/graphql', new expressGraphQL({
  schema,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

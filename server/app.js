import express from 'express';
import expressGraphQL from 'express-graphql';

const port = process.env.PORT || 8000;
const app = express();

app.all('/graphql', new expressGraphQL({
}));

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

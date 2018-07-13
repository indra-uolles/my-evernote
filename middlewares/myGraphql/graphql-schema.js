const { makeExecutableSchema } = require('graphql-tools');

const gql = strings => strings[0];
// Some fake data
const books = [
    {
        title: 'Harry Potter and the Sorcerer\'s stone',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

// The GraphQL schema in string form
const typeDefs = gql`
  type Query { 
      books: [Book] 
  }
  type Book { 
      title: String,
      author: String 
  }
`;

// The resolvers
const resolvers = {
    Query: {
        books: () => books
    },
};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = schema;

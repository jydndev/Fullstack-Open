const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { v1: uuid } = require('uuid');
const { GraphQLError } = require('graphql');

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const Person = require('./models/person');

require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

console.log('connecting to mongodb', MONGODB_URI);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to ', MONGODB_URI);
  })
  .catch((err) => {
    console.log('error connection to MongoDB:', err.message);
  });

// let persons = [
//   {
//     name: 'Arto Hellas',
//     phone: '040-123543',
//     street: 'Tapiolankatu 5 A',
//     city: 'Espoo',
//     id: '3d594650-3436-11e9-bc57-8b80ba54c431',
//   },
//   {
//     name: 'Matti Luukkainen',
//     phone: '040-432342',
//     street: 'Malminkaari 10 A',
//     city: 'Helsinki',
//     id: '3d599470-3436-11e9-bc57-8b80ba54c431',
//   },
//   {
//     name: 'Venla Ruuska',
//     street: 'Nallemäentie 22 C',
//     city: 'Helsinki',
//     id: '3d599471-3436-11e9-bc57-8b80ba54c431',
//   },
// ];

const typeDefs = `
  type Address {
    street: String!
    city: String! 
  }

  enum YesNo {
    YES
    NO
  }
  
  type Query {
    personCount: Int!
    allPersons(phone: YesNo): [Person!]!
    findPerson(name: String!): Person
  }

  type Person {
    name: String!
    phone: String
    address: Address!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person!]!
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person

    editNumber(
      name: String!
      phone: String!
    ): Person
  }
`;

const resolvers = {
  Query: {
    personCount: async () => Person.collection.countDocuments(),
    allPersons: (root, args) => {
      // if (!args.phone) {
      //   return persons;
      // }
      // const byPhone = (person) =>
      //   args.phone === 'YES' ? person.phone : !person.phone;
      // return persons.filter(byPhone);

      // filter missing

      return Person.find({});
    },
    findPerson: (root, args) => Person.findOne({ name: args.name }),
  },
  Person: {
    address: ({ street, city }) => {
      return {
        street,
        city,
      };
    },
  },
  Mutation: {
    addPerson: async (root, args) => {
      // if (persons.find((p) => p.name === args.name)) {
      //   throw new GraphQLError('Name must be unique', {
      //     extensions: {
      //       code: 'BAD_USER_INPUT',
      //       invalidArgs: args.name,
      //     },
      //   });
      // }
      // const person = { ...args, id: uuid() };
      // persons = persons.concat(person);
      // return person;

      const person = new Person({ ...args });
      return person.save();
    },
    editNumber: async (root, args) => {
      // const person = persons.find((p) => p.name === args.name);
      // if (!person) {
      //   return null;
      // }

      // const updatedPerson = { ...person, phone: args.phone };
      // persons = persons.map((p) => (p.name === args.name ? updatedPerson : p));
      // return updatedPerson;

      const person = await Person.findOne({ name: args.name });
      person.phone = args.phone;
      return person.save();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

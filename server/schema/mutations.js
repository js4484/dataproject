const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLBoolean, GraphQLList } = graphql;
const mongoose = require("mongoose");
const ObjectType = require("./types/object_type");
const Object = mongoose.model("objects");
const ObjectService = require('../services/object');

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    
    newObject: {
      type: ObjectType,
      args: {
        objectID: { type: GraphQLInt },
        isHighlight: { type: GraphQLBoolean },
        accessionYear: { type: GraphQLInt },
        primaryImage: { type: GraphQLString },
        primaryImageSmall: { type: GraphQLString },
        additionalImages: { type: GraphQLList(GraphQLString) },
        department: { type: GraphQLString },
        objectName: { type: GraphQLString },
        title: { type: GraphQLString },
        artistDisplayName: { type: GraphQLString },
        medium: { type: GraphQLString },
        artistNationality: { type: GraphQLString },
        objectBeginDate: { type: GraphQLInt },
        objectEndDate: { type: GraphQLInt }
      },
      resolve(_, { objectID, isHighlight, accessionYear, primaryImage, primaryImageSmall, additionalImages, department, objectName, title, artistDisplayName, medium, artistNationality, objectBeginDate, objectEndDate }) {
        return new Object({ objectID, isHighlight, accessionYear, primaryImage, primaryImageSmall, additionalImages, department, objectName, title, artistDisplayName, medium, artistNationality, objectBeginDate, objectEndDate }).save();
      }
    },
    seedObjects: {
      type: GraphQLString,
      args: {
        storeId: { type: GraphQLID }
      },
      resolve(parentValue) {
        return ObjectService.seedObjects();
      }
    }
  }
});

module.exports = mutation;

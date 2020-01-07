const mongoose = require("mongoose");
const graphql = require("graphql");
const Object = mongoose.model("objects");


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt

} = graphql;

const ObjectType = new GraphQLObjectType({
  name: "ObjectType",
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    objectID: {
      type: GraphQLInt
    },
    isHighlight: {
      type: GraphQLBoolean
    },
    accessionYear: {
      type: GraphQLInt
    },
    primaryImage: {
      type: GraphQLString
    },
    primaryImageSmall: {
      type: GraphQLString
    },
    additionalImages: {
      type: GraphQLList(GraphQLString)
    },
    department: {
      type: GraphQLString
    },
    objectName: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    artistDisplayName: {
      type: GraphQLString
    },
    medium: {
      type: GraphQLString
    },
    artistNationality: {
      type: GraphQLString
    },
    objectBeginDate: {
      type: GraphQLInt
    },
    objectEndDate: {
      type: GraphQLInt
    }
  })
});

module.exports = ObjectType;
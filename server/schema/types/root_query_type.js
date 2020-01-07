const mongoose = require("mongoose");
const graphql = require("graphql");
const ObjectType = require('./object_type')
const Object = mongoose.model("objects");
const axios = require('axios');
const awsKey = require("../../../config/keys").AWSKey;

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} = graphql;


const authOptions = {
  method: "GET",
  url: "https://53t4lg7wnd.execute-api.us-west-1.amazonaws.com/default/generate-price",
  headers: {
    "x-api-key": awsKey
  }
};

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    
    objects: {
        type: new GraphQLList(ObjectType),
        resolve() {
          return Object.find({});
        }
      },
    object: {
      type: ObjectType,
      args: {
        _id: {
          type: GraphQLID
        }
      },
      resolve(_, args) {
        return Object.findById(args._id);
          
      }
      }
    
  })
});

module.exports = RootQueryType;
const mongoose = require("mongoose");
const graphql = require("graphql");
const ObjectType = require('./object_type')
const Object = mongoose.model("objects");
const axios = require('axios');
const awsKey = require("../../../config/keys").AWSKey;

const {
  GraphQLString,
  GraphQLInt,
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
    objectsByDept: {
      type: GraphQLInt,
      args: {
        department: {
          type: GraphQLString
        }
      },
      resolve(_, args) {
        // let objects = Object.find({department: args.department});
        // let count = objects.length;
        async function getObjects(dept) {
          const objects = await Object.find({ department: dept })

          return objects.length;
        };

        return getObjects(args.department);
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
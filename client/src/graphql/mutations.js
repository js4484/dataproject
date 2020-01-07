import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      loggedIn
    }
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
      loggedIn
    }
  }
`;

export const REGISTER_USER = gql `
  mutation RegisterUser($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      email
      token
      loggedIn
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation NewProduct($name: String!, $weight: Int!, $description: String!) {
    newProduct(name: $name, weight: $weight, description: $description){
      _id
      name
      weight
      description
    }
  }
`;
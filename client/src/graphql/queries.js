import gql from "graphql-tag";

export const FETCH_PRODUCTS = gql `
  {
    products {
      _id
      name
      description
    }
  }
`;

export const FETCH_PRODUCT = gql `
  query FetchProduct($id: ID!) {
    product(_id: $id) {
      _id
      name
      description
      weight
      cost
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;
import gql from "graphql-tag";


// export const DEPT_COUNT = gql `
//   query DepartmentCount {
//     objectsByDept(department: "The American Wing") {
      
//     }
//     objectsByDept(department: "The American Wing") {
      
//     }
//   }
// `
export const ALL_OBJECTS = gql`
  {
    objects { 
    department
    }
  }
`


export const DEPT_COUNT = gql`
  query DepartmentCount {
    americanCount: objectsByDept(department: "The American Wing"),
    armsCount: objectsByDept(department: "Arms and Armor"),
    medCount: objectsByDept(department: "Medieval Art"),
    asianCount: objectsByDept(department: "Asian Art"),
    costCount: objectsByDept(department: "Costume Institute"),
    panCount: objectsByDept(department: "Arts of Africa, Oceania, and the Americas"),
    islCount: objectsByDept(department: "Islamic Art"),
    esculptCount: objectsByDept(department: "European Sculpture and Decorative Arts"),
    grCount: objectsByDept(department: "Greek and Roman Art"),
    photoCount: objectsByDept(department: "Photographs"),
    aneaCount: objectsByDept(department: "Ancient Near Eastern Art"),
    dpCount: objectsByDept(department: "Drawings and Prints"),
    euroCount: objectsByDept(department: "European Paintings"),
    rlcCount: objectsByDept(department: "Robert Lehman Collection"),
    cloisCount: objectsByDept(department: "The Cloisters"),
    mcaCount: objectsByDept(department: "Modern and Contemporary Art"),
    musicCount: objectsByDept(department: "Musical Instruments"),
    egyptCount: objectsByDept(department: "Egyptian Art")
  }
 
  
`

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
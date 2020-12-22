import { gql } from "@apollo/client";
const dataSchema = gql`
  query allData {
    usersData {
      id
      aboutDescs {
        desc
        id
      }
      services {
        name
        id
        externalUrl
        githubUrl
        body
        image {
          id
          fileName
          url
        }
      }
      servicesDesc {
        text
        id
      }
    }
  }
`;
export default dataSchema;

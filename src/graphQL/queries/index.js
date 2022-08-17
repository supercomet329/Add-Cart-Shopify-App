import { gql } from '@apollo/client'

const GET_PRODUCTS = (first) => {
  return gql`
  {
    products(first: ${first}) {
        edges {
            node {
                id
                title
            }
        }
    }
  }
  `
}

export { GET_PRODUCTS }

// const PRODUCTS_QUERY = gql`
//   mutation populateProduct($input: ProductInput!) {
//     productCreate(input: $input) {
//       product {
//         title
//       }
//     }
//   }
// `
// 	products(first: 10, reverse: true) {
//     edges {
//       node {
//         id
//         title
//         handle
//         resourcePublicationOnCurrentPublication {
//           publication {
//             name
//             id
//           }
//           publishDate
//           isPublished
//         }
//       }
//     }
//   }

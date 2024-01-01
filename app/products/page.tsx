import { storefront } from '../../utils'

export default async function getProducts() {
    try {
        /* Fetch all packs listed on Shopify store */
        const response = await storefront(packsQuery);
        /* If data is successfully obtained from StorefrontAPI */
        if (response.data) {
            console.log(response.data.products.edges)
            return (
                <main>
                    <p>{JSON.stringify(response.data)}</p>
                </main>
            );
        /* If there is an error obtaining data from StorefrontAPI */
        } else {
            console.error('No data returned from the API');
            return <main>Error fetching data</main>;
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        return <main>Error fetching data</main>;
    }
};

const gql = String.raw
  
const productsQuery = gql`
      query ProductByID {
        product(id:"gid://shopify/Product/7326098915376")  {
          title
          description
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    `

const packsQuery = gql`
    query PackProducts {
        products(first: 20, query: "tag:packs") {
            edges {
                node {
                    id
                    title
                    priceRange {
                        minVariantPrice {
                            amount
                        }
                    }
                    images(first: 1) {
                        edges {
                            node {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`
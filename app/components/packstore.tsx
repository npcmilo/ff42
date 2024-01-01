import { storefront } from '../../utils'
import Image from 'next/image'
import React, { useContext } from 'react';
import { CartContext } from '../contexts/cartcontext';

const gql = String.raw


/* 
Query: packsQuery
Description: Fetch all products with the 'packs' tag
*/
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

export default async function getProducts({}) {
    try {
        /* Fetch all packs listed on Shopify store */
        const response = await storefront(packsQuery);
        /* If data is successfully obtained from StorefrontAPI */
        if (response.data) {
            return (
                <main className="flex w-4/5 justify-between" style={{zIndex: 1}}>
                    {response.data.products.edges.map((edge: any, index: number) => (
                        <div key={index} className="text-white">
                            <Image src={edge.node.images.edges[0].node.url} alt="FF Pack Image" height={250} width={250}></Image> <br></br>
                            {edge.node.title} <br></br>
                            ${edge.node.priceRange.minVariantPrice.amount}
                        </div>
                    ))}
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
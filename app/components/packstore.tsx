'use client'

import { storefront } from '../../utils'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

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
                    variants(first: 1) {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                }
            }
        }
    }
`
/*
Query: checkoutMutation
Description: initalizes checkout for corresponding product */
const checkoutMutation = gql`
	mutation CheckoutCreate($variantId: ID!) {
		checkoutCreate(input: {
			lineItems: {
				variantId: $variantId,
				quantity: 1
			}
		}) {
			checkout {
				webUrl
			}
		}
	}
`

export default function Packstore() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await storefront(packsQuery);
                if (response.data) {
                    setProducts(response.data.products.edges);
                } else {
                    console.error('No data returned from the API');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    /* BOOKMARK To-Do */

    // Hard-coded variant ID
    const variantId = "gid://shopify/ProductVariant/41068718260272"

    async function checkout() {
        setIsLoading(true)
        const { data } = await storefront(checkoutMutation, { variantId })
        const { webUrl } = data.checkoutCreate.checkout
        window.location.href = webUrl

        console.log(data + ", " + webUrl)
    }
    /* BOOKMARK To-Do */

    return (
        <main className="flex w-4/5 justify-between" style={{zIndex: 1}}>
            {products.map((edge: any, index: number) => (
                <div key={index} className="text-white">
                    <Image src={edge.node.images.edges[0].node.url} alt="FF Pack Image" height={250} width={250}></Image> <br></br>
                    {edge.node.title} <br></br>
                    ${edge.node.priceRange.minVariantPrice.amount}
                    <button
                        onClick={checkout}
                        type='button'
                        className='flex w-full bg-white rounded-lg text-black p-1'
                                       >
                        {isLoading && (
                            <svg 
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                                                       xmlns="http://www.w3.org/2000/svg"
                            fill="none" 
                            viewBox="0 0 24 24">
                            <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                            ></circle>
                            <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                            </svg>
                        )}
                        Buy Now
                    </button>
                </div>
            ))}
        </main>
    );
};


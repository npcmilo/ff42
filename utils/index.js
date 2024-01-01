/*
Function: storefront()
Description: Fetch data from Shopify website using StorefrontAPI
*/
export async function storefront(query, variables = {}) {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

export async function fetchProducts() {
    const url = 'https://stageapi.monkcommerce.app/task/products/search?search=Hat&page=2&limit=10';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.REACT_APP_API
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

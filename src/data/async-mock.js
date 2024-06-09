const PRODUCT_LIST = [
    {
        "id": 1,
        "category": "Alfajores",
        "name": "ALFAJORES MAR DEL PLATA x 8un.",
        "price": 16500.00,
        "stock": 1,
        "img": "https://placehold.co/300x400",
    },
    {
        "id": 2,
        "category": "Alfajores",
        "name": "ALFAJORES SUPER DULCE DE LECHE x 9un.",
        "price": 18500.00,
        "stock": 20,
        "img": "https://placehold.co/300x400"
    },
    {
        "id": 3,
        "category": "Alfajores",
        "name": "ALFAJORES 70% CACAO PURO X 9 uds",
        "price": 18500.00,
        "stock": 9,
        "img": "https://placehold.co/300x400"
    },
    {
        "id": 4,
        "category": "Alfajores",
        "name": "ALFAJORES CHOCOLATE x 12 uds",
        "price": 16500.00,
        "stock": 7,
        "img": "https://placehold.co/300x400"
    },
    {
        "id": 5,
        "category": "Alfajores",
        "name": "ALFAJORES CHOCOLATE x 6 uds",
        "price": 8500.00,
        "stock": 5,
        "img": "https://placehold.co/300x400"
    },
    {
        "id": 6,
        "category": "Alfajores",
        "name": "ALFAJORES MIXTOS CLÁSICOS x 6 uds",
        "price": 8500.00,
        "stock": 2,
        "img": "https://placehold.co/300x400"
    },
    {
        "id": 7,
        "category": "Alfajores",
        "name": "ALFAJORES MIXTOS CLÁSICOS x 12 uds",
        "price": 16500.00,
        "stock": 3,
        "img": "https://placehold.co/300x400"
    },
    {
        "id": 8,
        "category": "Alfajores",
        "name": "MINI ALFAJORES MIXTOS DE CHOCOLATE x 475g",
        "price": 18500.00,
        "stock": 20,
        "img": "https://placehold.co/300x400"
    },
    {
        "id": 9,
        "category": "Alfajores",
        "name": "MINI ALFAJORES x 475g",
        "price": 18500.00,
        "stock": 10,
        "img": "https://placehold.co/300x400"
    }
]

export function getProductList(categoryId)
{
    const filterProductList = () => {
        if (!categoryId)
        {
            return PRODUCT_LIST;
        }
        else
        {
            const FILTER_RESULT = PRODUCT_LIST.filter(product => product.category === categoryId);
            return FILTER_RESULT.length > 0 ? FILTER_RESULT : null;
        }
    }

    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            const REJECT_MESSAGE =  "¡UPS! Parece que no hay productos disponibles ahora...";
            
            PRODUCT_LIST.length > 0 ? resolve(filterProductList) : reject(REJECT_MESSAGE)
        }, 2000)
    })
}

export function getProduct(itemId)
{
    return new Promise((resolve, reject) => {
        
        const PRODUCT_INDEX = PRODUCT_LIST.findIndex(product => product.id === itemId);
        
        const REJECT_MESSAGE =  "¡UPS! Ese item no existe...";

        PRODUCT_INDEX > -1 ? resolve(PRODUCT_LIST[PRODUCT_INDEX]) : reject(REJECT_MESSAGE)
    })
}
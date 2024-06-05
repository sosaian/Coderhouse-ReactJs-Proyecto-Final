const PRODUCT_LIST = [
    {
        "id": 1,
        "category": "Alfajores",
        "name": "ALFAJORES MAR DEL PLATA x 8un.",
        "price": 16500.00,
        "stock": 1,
        "img": {
            "default": "https://placehold.co/75x100",
            "thumbnail": "https://placehold.co/50x75"
        }
    },
    {
        "id": 2,
        "category": "Alfajores",
        "name": "ALFAJORES SUPER DULCE DE LECHE x 9un.",
        "price": 18500.00,
        "stock": 20,
        "img": {
            "default": "https://placehold.co/75x100",
            "thumbnail": "https://placehold.co/50x75"
        }
    },
    {
        "id": 3,
        "category": "Alfajores",
        "name": "ALFAJORES 70% CACAO PURO X 9 uds",
        "price": 18500.00,
        "stock": 9,
        "img": {
            "default": "https://placehold.co/75x100",
            "thumbnail": "https://placehold.co/50x75"
        }
    },
    {
        "id": 4,
        "category": "Alfajores",
        "name": "ALFAJORES CHOCOLATE x 12 uds",
        "price": 16500.00,
        "stock": 7,
        "img": {
            "default": "https://placehold.co/75x100",
            "thumbnail": "https://placehold.co/50x75"
        }
    },
    {
        "id": 5,
        "category": "Alfajores",
        "name": "ALFAJORES CHOCOLATE x 6 uds",
        "price": 8500.00,
        "stock": 5,
        "img": {
            "default": "https://placehold.co/75x100",
            "thumbnail": "https://placehold.co/50x75"
        }
    },
    {
        "id": 6,
        "category": "Alfajores",
        "name": "ALFAJORES MIXTOS CLÁSICOS x 6 uds",
        "price": 8500.00,
        "stock": 2,
        "img": {
            "default": "https://placehold.co/75x100",
            "thumbnail": "https://placehold.co/50x75"
        }
    },
    {
        "id": 7,
        "category": "Alfajores",
        "name": "ALFAJORES MIXTOS CLÁSICOS x 12 uds",
        "price": 16500.00,
        "stock": 3,
        "img": {
            "default": "https://placehold.co/75x100",
            "thumbnail": "https://placehold.co/50x75"
        }
    },
    {
        "id": 8,
        "category": "Alfajores",
        "name": "MINI ALFAJORES MIXTOS DE CHOCOLATE x 475g",
        "price": 18500.00,
        "stock": 20,
        "img": {
            "default": "https://placehold.co/75x100",
            "thumbnail": "https://placehold.co/50x75"
        }
    },
    {
        "id": 9,
        "category": "Alfajores",
        "name": "MINI ALFAJORES x 475g",
        "price": 18500.00,
        "stock": 10,
        "img": {
            "default": "https://placehold.co/75x100",
            "thumbnail": "https://placehold.co/50x75"
        }
    }
]

export function getProductList()
{
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            const REJECT_MESSAGE =  "¡UPS! Parece que no hay productos disponibles ahora...";

            PRODUCT_LIST.length > 0 ? resolve(PRODUCT_LIST) : reject(REJECT_MESSAGE)
        }, 2000)
    })
} 
const products = [
    {
        id: 1,
        title: "SAMSUNG Galaxy S21",
        description: "Galaxy S21 FE viene para sorprender a los fans Galaxy, con todo lo que estaban esperando.",
        price: 2649090,
        stock: 10,
        category: "smartphone",
        img: "/images/smartphones/apple-iphone11.png",
    },
    {
        id: 2,
        title: "APPLE iPhone 11 (128 GB)",
        description: "El iPhone 11 Negro tiene un sistema de dos cámaras que te permite tomar fotos con ultra gran angular, capturar exceelntes fotos nocturnas con el modo Noche y grabar videos con una calidad sorprendente.",
        price: 2789900,
        stock: 8,
        category: "smartphone",
        img: "/images/smartphones/samsung-galaxy-s21.png",
    },
    {
        id: 3,
        title: "Computador Portátil HP 15.6",
        description: "Computador portátil HP, desempeño confiable todos los días! Su diseño fino y ligero te permite llevar este equipo a cualquier lado con facilidad.",
        price: 2119000,
        stock: 6,
        category: "laptop",
        img: "/images/laptop/laptop-hp.png",
    },
    {
        id: 4,
        title: "Computador Portátil LENOVO 14",
        description: "En el portátil LENOVO IdeaPad 3 color azul, encuentra todo el rendimiento que necesitas, un portátil accesible que cubre tus necesidades.",
        price: 2109800,
        stock: 6,
        category: "laptop",
        img: "/images/laptop/laptop-lenovo.png",
    },
    {
        id: 5,
        title: "APPLE iPad Pro 11",
        description: "Con el iPad Pro podrás crear diseños 3D fotorrealistas, diseñar complejos modelos de realidad aumentada y disfrutar juegos con gráficos dignos de una consola a una alta frecuencia de cuadros más rápido que nunca.",
        price: 5599000,
        stock: 5,
        category: "tablet",
        img: "/images/tablet/ipad-pro11.png",
    },
    {
        id: 6,
        title: "LENOVO Tablet M10",
        description: "La Tab M10 Plus 3 generación color Gris tiene las especificaciones perfectas para ser la tableta de entretenimiento para toda la familia.",
        price: 1299000,
        stock: 7,
        category: "tablet",
        img: "/images/tablet/lenovo-m10.png",
    },
    {
        id: 7,
        title: "LG TV 55 Pulgadas",
        description: "El televisor LG 4K UHD 55UQ8050 está diseñado para superar tus expectativas, experimentando imágenes realistas y colores vivos con la mejor calidad Ultra HD.",
        price: 2149900,
        stock: 4,
        category: "tv",
        img: "/images/tv/lg-tv.png",
    },
    {
        id: 8,
        title: "SAMSUNG TV 50 Pulgadas",
        description: "El televisor SAMSUNG 4K diseñado para superar tus expectativas, experimentando imágenes realistas y colores vivos con la mejor calidad Ultra HD.",
        price: 2099000,
        stock: 3,
        category: "tv",
        img: "/images/tv/samsung-tv.png",
    },
];

const GetProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false;
        
        setTimeout(() => {
            if (error)
                reject("Hubo un error al obtener el listado de productos.");
            else
                resolve(products);
        }, 2000);
    });
};

const GetProductDetail = (pId) => {
    return new Promise((resolve, reject) => {
        
        const result = products.find((item)=> {
            return item.id === parseInt(pId);
        });

        setTimeout(() => {
            if (result) resolve(result);
            else reject(`No existe el producto con el ID: ${pId}`);    
        }, 1000);
    });
};

const GetProductByCategory = (pCategory) => {
    return new Promise((resolve, reject) => {
        
        const result = products.filter((item)=> {
            return item.category === pCategory;
        });

        setTimeout(() => {
            if (result) resolve(result);
            else  reject(`No existen producto con la categoría: ${pCategory}`);    
        }, 1000);
    });
};

export default GetProducts;
export {GetProductDetail, GetProductByCategory};
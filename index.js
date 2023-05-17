class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    generateId() {
        return Date.now().toString();
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const currentProduct = this.products.find(product => product.code === code);
        if (currentProduct) {
        throw new Error('El código ya existe.');
        }
        const id = this.generateId();
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
    this.products.push(product);
    return product;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (!product) {
        throw new Error('No se encontró el producto.');
        }

        return product;
    }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

try {
    const newProduct = productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
    console.log("Nuevo producto:", newProduct);
    } catch (error) {
    console.log("Error al agregar el nuevo producto:", error.message);
}

console.log(productManager.getProducts());

try {
    productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
} catch (error) {
    console.log("Error al agregar el producto:", error.message);
}

try {
    const product = productManager.getProductById(productManager.getProducts()[0].id);
    console.log("Producto encontrado por ID:", product);
} catch (error) {
    console.log("Error al obtener el producto:", error.message);
}

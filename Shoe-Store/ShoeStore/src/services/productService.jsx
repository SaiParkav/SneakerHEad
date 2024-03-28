import http from "../http-common";

const getAll = () => {
    return http.get("/products");
};

const get = brand => {
    return http.get(`/products/${brand}`);
};

const cart = () => {
    return http.get(`/CartProducts/true`);
}

const create = data => {
    return http.post("/products",data);
}

const update = (id, data) => {
    return http.put(`/products/${id}`);
}

const addCart = id => {
    return http.put(`/products/addCart/${id}`);
};

const removeCart = id => {
    return http.put(`/products/addCart/${id}`)
}
const productService = {
    getAll,
    get,
    create,
    update,
    addCart,
    removeCart,
    cart
};

export default productService;
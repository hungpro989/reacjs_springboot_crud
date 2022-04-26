import httpClient from '../http-common';
const getAll = () => {
    return httpClient.get('/products');
}
const create = (data) => {
    return httpClient.post('/products', data);
}
const get = id => {
    return httpClient.get(`/products/${id}`);
}
const update = (data) => {
    console.log(">>>check data service", data);
    return httpClient.put("/products", data);
}
const remove = id => {
    return httpClient.delete(`/products/${id}`);
}
export default { getAll, create, get, update, remove };
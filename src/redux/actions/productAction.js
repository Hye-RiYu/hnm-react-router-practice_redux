// import { productActions } from "../reducers/productSlice";

// function getProducts(searchQuery) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/Hye-RiYu/hnm-react-router-practice/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     dispatch({ type: "GET_PRODUCT_SUCCESS", payload: {data} });
//     dispatch(productActions.getAllproducts({data}));
//   };
// }

// function getProductDetail(id) {
//   return async (dispatch) => {
//     let url = `https://my-json-server.typicode.com/Hye-RiYu/hnm-react-router-practice/products/${id}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
//     dispatch(productActions.getSingleproduct({ data }));
//   };
// }

// export const productAction = { getProducts, getProductDetail };
// export const productAction = { getProductDetail };
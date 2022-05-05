export const addProductToCart = (product) => {

    return {
        type: "ADDPRODUCT",
        payload: product
    }
}

export const deleteProductFromCart = (product) => {

    return {
        type: "DELETEPRODUCT",
        payload: product
    }
}


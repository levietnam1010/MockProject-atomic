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


export const addAddressUser = (address) => {

    return {
        type: "ADD_ADDRESS_USER",
        payload: address
    }
}

export const setDefaultAddress = (address) => {

    return {
        type: "SET_DEFAULT_ADDRESS",
        payload: address
    }
}





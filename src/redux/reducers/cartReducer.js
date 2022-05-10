const cart = [];




const carts = (state = cart, action) => {
    switch (action.type) {

        case "ADDPRODUCT":

            const inCart = cart.find(product =>
                product.id == action.payload.id ? true : false

            );




            if (inCart) {

                const currentProduct = {}

                //splice

                currentProduct = cart.filter(product =>
                    product.id === action.payload.id
                )

                const currentProductNext = {}

                state = state.filter((product) =>
                    product.id !== action.payload.id
                )

                currentProductNext = { ...currentProduct, quantity: currentProduct.quantity + action.payload.quantity }
                return [
                    ...state, currentProductNext
                ]

            }
            else {
                return [
                    ...state, action.payload
                ]
            }



        case "DELETEPRODUCT":
            return state = state.filter((product) => {
                return product.id !== action.payload.id
            })


        case "SELECTEDPRODUCT":
            return state = state.filter((product) => {
                return product.id !== action.payload.id
            })



        default: return state

    }
}



export default carts;
const cart = []

const carts = (state = cart, action) => {
    switch (action.type) {

        case "ADDPRODUCT": return [
            ...state, action.payload
        ]


        case "DELETEPRODUCT":
            return state = state.filter((product) => {
                return product.id !== action.payload.id
            })



        default: return state

    }
}



export default carts;
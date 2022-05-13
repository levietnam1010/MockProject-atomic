const address = []

const addressUsers = (state = address, action) => {
    switch (action.type) {
        case "ADD_ADDRESS_USER":
            return [
                ...state, action.payload
            ]


        case "DELETE_ADDRESS":
            return state = state.filter((address) => {
                return address.id !== action.payload.id
            })

        case "SET_DEFAULT_ADDRESS":
            return state = state.map((address) => (address.id == action.payload.id)
                ? {
                    id: address.id, name: address.name, phone: address.phone, wards: address.wards, district: address.district, province: address.province, addressSpec: address.addressSpec, defaulAddress: true
                }
                : {
                    id: address.id, name: address.name, phone: address.phone, wards: address.wards, district: address.district, province: address.province, addressSpec: address.addressSpec, defaulAddress: false
                })



        default: return state

    }

}

export default addressUsers;
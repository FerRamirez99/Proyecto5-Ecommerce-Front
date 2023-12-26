const userReducer = (state, action) => {
    const {type, payload} = action
    
    switch (type) {
        case "REGISTER/LOGIN":
            localStorage.setItem("token", payload.token)
            return {
                ...state,
                authStatus: true
            }
        case "INFO_USER":
            return {
                ...state,
                infoUser: payload,
                authStatus: true
            }
        case "SIGN_OUT":
            localStorage.removeItem("token")
            return {
                ...state,
                infoUser: [],
                authStatus: false
            }
        case "EDIT_USER":
            return {
                ...state,
                infoUser: payload
            }
        default:
            return state
    }
}

export default userReducer
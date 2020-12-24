//This will be set to Redux an initialization
const initialState:any = []

const categoriesReducer = (state = initialState, action: any) => {
    const {type, payload} = action

    switch (type) {
        case "SET_APPLICANTS":
            //Sets all Products into State, overwrites old Product State
            return [payload]
            //Default case, just returns the initialState/currentState
        default:
            return state
    }
}

export default categoriesReducer
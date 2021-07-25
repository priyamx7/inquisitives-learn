export const initialState = {
    watchLater: [],
    likes: [],
    category: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_WATCH_LATER":
            return { ...state, watchLater: [...state.watchLater, action.payload] }

        case "SET_LIKE":
            return { ...state, likes: [...state.likes, action.payload] }
        
        case "REMOVE_FROM_WATCH_LATER":
            return { ...state, watchLater: state.watchLater.filter(item => item._id !== action.payload._id) }
        
        case "REMOVE_FROM_LIKES":
            return { ...state, likes: state.likes.filter(item => item._id !== action.payload._id) }
        
        case "SET_FILTER":
            return { ...state, category: action.payload }
    
        default:
            return { state };
    }
}
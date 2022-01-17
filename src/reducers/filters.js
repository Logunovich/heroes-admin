const initialState = {
    filters: [],
    activeFilter: 'all'
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload
            }
        case 'CHANGE_FILTER':
            return {
                ...state,
                activeFilter: action.payload
            }
        default: return state
    }
}

export default filtersReducer;
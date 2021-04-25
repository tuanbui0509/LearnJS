let initialState = {
    by: 'status',
    value: 1//1 tăng, -1 giảm
}

let myReducer = (state = initialState, action) => {
    if (action.type === 'SORT') {

        let { by, value } = action.sort;
        return {
            sort: { by, value }
        }

    }
    return state;
}

export default myReducer;
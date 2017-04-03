export default (state = { data: 'task', active: '' }, action) => {
    switch (action.type) {
        case 'CHOOSE_DATA':
            return Object.assign({}, state, { data: action.data });
        case 'CHOOSE_BOOK':
            const active = (state.active === action.bookId) ? '' : action.bookId;
            return Object.assign({}, state, { active });
        default:
            return state;
    }
}
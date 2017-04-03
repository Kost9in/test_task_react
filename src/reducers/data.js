
const initialState = {
    loading: false,
    data: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'START_LOAD_DATA':
            return Object.assign({}, state, { loading: true, data: {} });
        case 'FINISH_LOAD_DATA':
            const readers = {};
            action.data.readers.forEach(({ id, name }) => {
                readers[id] = name;
            });
            const data = Object.assign({}, action.data, { readers });
            return Object.assign({}, state, { loading: false, data });
        default:
            return state;
    }
};
import update from 'react-addons-update';

const initialState = {
    test : null
};

export default function index(state=initialState, action) {
    return update(state, {
        test : {$set : 123}
    });
};
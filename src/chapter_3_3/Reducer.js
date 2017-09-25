import * as ActionTypes from './ActionType'

export default (state, action) => {
    const { counterCaption, type } = action;

    switch (type) {
        case ActionTypes.INCREMENT :
            return {...state, [counterCaption]: state[counterCaption] + 3};
        case ActionTypes.DECREMENT :
            return {...state, [counterCaption]: state[counterCaption] - 3};
        default :
            return state;
    }
}

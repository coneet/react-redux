import { createStore } from 'redux';

export const INC = 'INC';
export const DESC = 'DESC';

export const intial = {
    total: 0
}

export const increase = () => {
    return {
        type: INC
    }
}

export const decrease = () => {
    return {
        type: DESC
    }
}

export const actionDispatch = (state = intial, action) => {
    switch (action.type) {
        case INC: return {
            ...state,
            total: state.total + 10
        }
        case DESC: return {
            ...state,
            total: state.total - 10
        }
        default: return state;
    }
}

export const store = createStore(actionDispatch);

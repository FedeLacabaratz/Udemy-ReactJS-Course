import {  
    USUARIO_AUTENTICADO
} from '../../types';

const reducer = (state, action) => {
    switch(action.type) {
        case USUARIO_AUTENTICADO:
            return {
                ...state,
                usuario: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
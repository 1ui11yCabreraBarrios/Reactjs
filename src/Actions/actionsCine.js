import { constants } from '../Constants/constantsCine';


export const saveCompra = (movie) => (dispatch)=> {
    try{
        dispatch ({
            type:constants.SAVE_COMPRA,
            payload: movie,
        });

    }catch(error){
        dispatch({type:constants.ERROR_COMPRA, payload: error});

    }
}
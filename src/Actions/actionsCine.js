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

export const deleteCompra = (movie) => (dispatch) => {
    try {
      dispatch({
        type:constants.DELETE_COMPRA,
        payload: movie,
      });
    } catch (error) {
      dispatch({ type: constants.ERROR_COMPRA, payload: error });
    }
  };

  export const updateCompra = (movie,index) => (dispatch) => {
      try{
        dispatch({
          type:constants.UPDATE_COMPRA,
          payload: {movie, index}
        })
      }catch(error){
        dispatch ({type:constants.ERROR_COMPRA, payload: error});
      }


  }
  
export const modeCompra = (index) => (dispatch) => {
  try {
    dispatch({
      type: constants.MODE_COMPRA,
      payload: index,
    });
  } catch (error) {
    dispatch({ type: constants.ERROR_COMPRA, payload: error });
  }
};
  
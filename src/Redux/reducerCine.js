import { constants } from '../Constants/constantsCine';
const cineData ={
    loading: false,
    data: [],
    modeCompra: false,
    updateCompra: null,
};

export default function cineCompra ( compra = cineData, action){
    switch(action.type){
        case constants.SAVE_COMPRA:
            return{ data: [...compra.data, action.payload]};
            
    case constants.MODE_COMPRA:
        return {
          ...compra,
          modeCompra: true,
          updateCompra: { movie: compra.data[action.payload], index: action.payload },
        };

            case constants.UPDATE_COMPRA:
                return{ data:
                  compra.data.map((values,index) =>{
                    return index === action.payload.index ? action.payload.movie : values}
                  )};
          

                case constants.DELETE_COMPRA:
                    return { data: compra.data.filter((values) => action.payload !== values) };

                    case constants.ERROR_COMPRA:
                        return { hasError: true, error: action.payload };

            default:
                return compra;
    }

}
import { constants } from '../Constants/constantsCine';
const cineData ={
    loading: false,
    data: [],
};

export default function cineCompra ( compra = cineData, action){
    switch(action.type){
        case constants.SAVE_COMPRA:
            return{ data: [...compra.data, action.payload]};
            case constants.ERROR_COMPRA:
                return { hasError: true, error: action.payload };

            default:
                return compra;
    }

}
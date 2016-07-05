import { RETRIEVE_PRODUCTS } from '../actions';

export function products(state = [], action) {
    switch (action.type) {
        case RETRIEVE_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}
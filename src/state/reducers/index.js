import { combineReducers } from 'redux';
import amountReducer from './amountReducer';
import mult from './multDiv';



const reducers= combineReducers({
    amount: amountReducer,
    amount2: mult,


})



export default reducers

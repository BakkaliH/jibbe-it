import * as ActionTypes from './ActionTypes';

export const addtarget = (targetlocalisation) => ({
    type: ActionTypes.ADD_TARGET,
    payload: {
        targetlocalisation: targetlocalisation
    }
});
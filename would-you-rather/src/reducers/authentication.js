import { LOGIN, LOGOUT } from '../actions/authentication'

export default function authedUserId(state=null, action){
    switch (action.type){
        case LOGIN:
            return action.id;
        case LOGOUT :
            return null;
          default :
            return state
    }
}
import {TIMESLOTS} from '../actionTypes'

const initialState = {
    data: [],
}

export default function (state = initialState, action) {
    switch(action.type){
        case(TIMESLOTS):{
            const {content} = action.payload
            let temp = [...state.data]
            for(let a in content[0]){
                temp = [...temp,{time:content[0][a],booked:false,userName:'UserName', password: 'Password'}]
            }
            return {
                ...state,
                data:[...temp]
            }
        }
        default:{
            return state
        }

    }
}      
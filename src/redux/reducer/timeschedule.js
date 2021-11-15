import {BOOK,EDIT} from '../actionTypes'

const initialState = {
     data : [
    {time:'09:00 am',booked:false,userName:'UserName', phone: 'phone'},
    {time:'10:00 am',booked:false,userName:'UserName', phone: 'phone'},
    {time:'11:00 am',booked:false,userName:'UserName', phone: 'phone'},
    {time:'12:00 am',booked:false,userName:'UserName', phone: 'phone'},
    {time:'01:00 pm',booked:false,userName:'UserName', phone: 'phone'},
    {time:'02:00 pm',booked:false,userName:'UserName', phone: 'phone'},
    {time:'03:00 pm',booked:false,userName:'UserName', phone: 'phone'},
    {time:'04:00 pm',booked:false,userName:'UserName', phone: 'phone'},
    {time:'05:00 pm',booked:false,userName:'UserName', phone: 'phone'},
    ],
   
}

export default function (state = initialState, action) {
    switch(action.type){
        case(BOOK):{
            const {content} = action.payload;
            let temp = [...state.data]
            temp.splice(content[1],1,{...state.data[content[1]],booked:true})
            return {
                ...state,
                data:[...temp]
            }
        }
        case(EDIT):{
            const {content} = action.payload;
            let temp = [...state.data]
            temp.splice(content[0],1,{...state.data[content[0]],userName:content[1],phone:content[2]})
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
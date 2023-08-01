import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: 'Gowtham',
    msg: ''
}
export const newSlice = createSlice(
    {
        name: 'new',
        initialState,
        reducers:{
            greet: (state) => {
                state.msg='Welcome ' + state.name;
            },
            appreciate: (state) => {
                state.msg='Welldone  '+ state.name;
            },
            leave: (state) => {
                state.msg='See you '+ state.name;
            }
        }
    }
)
export const { greet, appreciate, leave } = newSlice.actions;
export const selectMsg = (state) => state.new.msg;
export default newSlice.reducer;
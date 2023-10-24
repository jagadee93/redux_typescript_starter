import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface ICounterState {
    value: number;
}

const initialState: ICounterState = {
    value:0,
};


const CounterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        incremented(state){
            //under the hood it uses immer library to update the state
            //immer wraps our state and updates and tracks all the mutations that we try to do .
            //And once we are done it actually kind of replays  them and turns it into  a safe and correct immutable update
            // as if we done all of that copying and spreading and mapping everything in a normal state update.
            //imemr tracks all 
            state.value++;
        },
        amountAdded(state,action:PayloadAction<number>){
            state.value+=action.payload;
        },
        decremented(state){
            state.value--;
        }
        
    }
});


export const {incremented,amountAdded,decremented}=CounterSlice.actions;
export default CounterSlice.reducer;

//thunk is a middle ware that allows a  store accept a function as a dispatched thing ..
//its basically a way to  let you write logic that talks to store a head of time and  separate from your components without knowing what store its going to be talking to.it gives you access to dispatch and get state 

import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import {RootState,AppDispatch}from "./store"
export const useAppDispatch=()=>useDispatch<AppDispatch>(); 
// we are aliasing functions by adding types ..

export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;    
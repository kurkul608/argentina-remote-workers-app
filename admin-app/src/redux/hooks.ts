import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { IRootState, IAppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => IAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

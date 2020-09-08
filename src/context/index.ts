import React from "react"
import { EMPTY } from "../types"

export const StateContext = React.createContext<Object>(EMPTY)
export const StateConsumer = StateContext.Consumer

export const DispatchContext = React.createContext<any>(EMPTY)
export const DispatchConsumer = DispatchContext.Consumer

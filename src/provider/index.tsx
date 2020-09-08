import React from "react"
import { combineReducers } from "../combine-reducers/index"
import { ProviderProps } from "../types"
import { DispatchContext, StateContext } from "../context/index"

export const Provider = (provider: ProviderProps) => {
	const [state, dispatch] = combineReducers(provider.store)
	return (
		<DispatchContext.Provider value={dispatch}>
			<StateContext.Provider value={state}>
				{provider.children}
			</StateContext.Provider>
		</DispatchContext.Provider>
	)
}

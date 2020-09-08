import { Reductor, Action, Dispatch, Reducers } from "../types"

export const combineReducers = (store: Reducers): Reductor => {
	const keys = Object.keys(store)
	const state = keys.reduce(
		(acc: any, key: any) => ({ ...acc, [key]: store[key][0] }),
		{},
	)
	const dispatch = (action: Action): void =>
		keys.map((key: any) => store[key][1]).forEach((fn: Dispatch) => fn(action))
	return [state, dispatch]
}

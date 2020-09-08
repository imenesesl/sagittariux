export type Action = Function | void
export type Dispatch = React.Dispatch<Action>
export type Reductor = [Object, Dispatch]

export interface Reducers {
	[name: string]: Reductor
}

export interface ProviderProps {
	children: React.ReactNode
	store: Reducers
}

export const EMPTY: unique symbol = Symbol()

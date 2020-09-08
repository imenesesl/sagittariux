import { ADD_COUNTER_ACTION, SUBSTRACT_COUNTER_ACTION } from "./types"

export * from "./state"

export const testReducer = (state: any, action: any) => {
	const { type, payload } = action
	switch (type) {
		case ADD_COUNTER_ACTION:
			return {
				...state,
				counter: state.counter + payload,
			}
		case SUBSTRACT_COUNTER_ACTION:
			return {
				...state,
				counter: state.counter - payload,
			}
		default:
			throw new Error("Action no valid")
	}
}

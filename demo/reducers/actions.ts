import { ADD_COUNTER_ACTION, SUBSTRACT_COUNTER_ACTION } from "./types"

export const addAction = (value: number): Object => {
	return {
		type: ADD_COUNTER_ACTION,
		payload: value,
	}
}

export const substractAction = (value: number): Object => {
	return {
		type: SUBSTRACT_COUNTER_ACTION,
		payload: value,
	}
}

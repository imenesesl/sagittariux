import { Action, Dispatch } from "../types"

export const mapToActions = (action: Action | any) => (
	dispatch: Dispatch | Object,
): void => {
	if (typeof dispatch === "function") return dispatch(action)
}

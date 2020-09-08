import React from "react"
import { mapToActions } from "../map-reductor/index"
import { Dispatch, Action, Reducers } from "../types"
import { DispatchConsumer, StateConsumer } from "../context/index"

export const connect = (
	stateProps: (state: Reducers) => Object,
	dispatchProps: Dispatch,
) => (Component: any) => {
	const Connect = ({ ...rest }) => (
		<DispatchConsumer>
			{(dispatch: Action) => (
				<StateConsumer>
					{(state: Object) => (
						<Component
							{...rest}
							{...mapToActions(state)(stateProps)}
							{...mapToActions(dispatch)(dispatchProps)}
						/>
					)}
				</StateConsumer>
			)}
		</DispatchConsumer>
	)
	return class extends React.Component {
		render() {
			return <Connect {...this.props} />
		}
	}
}

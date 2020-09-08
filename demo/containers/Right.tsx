import React from "react"
import { connect } from "../../src/sagittariux"
import { addAction, substractAction } from "../reducers/actions"

const RightContainer = ({ add, substract }) => {
	return (
		<div className="view-container right-container">
			<button onClick={() => add(1)}>ADD</button>
			<button onClick={() => substract(1)}>SUBSTRACT</button>
		</div>
	)
}

const mapDispatchToProps = (dispatch: Function) => ({
	add: (number: number) => dispatch(addAction(number)),
	substract: (number: number) => dispatch(substractAction(number)),
})

export default connect(null, mapDispatchToProps)(RightContainer)

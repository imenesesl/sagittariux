import React from "react"
import { connect } from "../../src/sagittariux"
import { Reducers } from "../../src/types"

const LeftContainer = ({ counter }) => {
	return (
		<div className="view-container letf-container">
			<span>{counter} </span>
		</div>
	)
}

const mapStateToProps = (state: Reducers) => ({
	counter: state.test["counter"],
})

export default connect(mapStateToProps, null)(LeftContainer)

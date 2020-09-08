import React, { useReducer } from "react"
import { testReducer, testState } from "./reducers"
import { Provider } from "../src/sagittariux"
import RightContainer from "./containers/Right"
import LeftContainer from "./containers/Left"
import "./style.css"

const App = () => {
	const store = {
		test: useReducer(testReducer, testState),
	}
	return (
		<Provider store={store}>
			<div className="principal-container">
				<LeftContainer />
				<RightContainer />
			</div>
		</Provider>
	)
}

export default App

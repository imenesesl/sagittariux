## Sagitttariux 

This project aims to have a default structure for state management, something similar to Redux but using Hooks

* ## SagittariuxBlackHole :milky_way:

This component is in charge of managing the state of all their children in the tree, to manage a general state of the entire application it is recommended to add it at the top of the gerarchy

#### Params

`component={PrincipalComponent}`: State representative component

`reducers={reducersObject}`: Object that will contain the different states, these objects are segmented by reducers

#### Warning

The `reducersObject` object can only be built within a React component

#### Example

```jsx
const App = () => {
    const reducers = {
        app: useReducer(reducerApp, initialStateApp),
        counter: useReducer(reducerCounter, initialStateCounter),
    }

    return < SagittariuxBlackHole component={NodeApp} reducers={reducers} />
}

export default App

```

* ## SagittariuxStateless :zzz:

This component can only access the state assigned to SagittariuxBlackHole and built by SagittariuxState

#### Inherited Parameters

`state`: Object with the different access keys to the previous reducers assigned to SagittariuxBlackHole

`component={NameComponentController}`: Heir component

#### Structure

`NameComponentController`: Heir component that will have access to the state

`NameComponent`: Representative component

#### Example

* Before

```jsx
const CounterController = ({ state }) => {

    const { counter } = state

    return <span>Counter: {counter.counter}</span>
}

const CounterView = ({ ...rest }) => <SagittariuxStateless component={CounterController} {...rest} />

export default CounterView
```

* Now

```jsx
const CounterController = ({ state }) => {

    const { counter } = state

    return <span>Counter: {counter.counter}</span>
}

export default SagittariuxStateless(CounterController)
```

* ## SagittariuxStatefull :fire:

This component unlike SagittariuxStateless can access the state and dispatch assigned to SagittariuxBlackHole and built by SagittariuxState

#### Inherited Parameters

`state`: Object with the different access keys to the previous reducers assigned to SagittariuxBlackHole

`dispatch`: Function that receives an action as a parameter, this action is directly associated with the state to be modified by reducing

`component={NameComponentController}`: Heir component

#### Structure

`NameComponentController`: Heir component that will have access to the status and dispatch

`NameComponent`: Representative component

#### Example

* Before

```jsx
const CounterController = ({ state, dispatch }) => {

    const { counter } = state
    const increment = () => dispatch(updateIncrementCounter())

    return (
        <>
            <span>Counter: {counter.counter}</span>
            <button onClick={increment}>Increment</button>
        </>
    )
}

const CounterView = ({ ...rest }) => <SagittariuxStatefull component={CounterController} {...rest} />

export default CounterView
```

* Now

```jsx
const CounterController = ({ state, dispatch }) => {

    const { counter } = state
    const increment = () => dispatch(updateIncrementCounter())

    return (
        <>
            <span>Counter: {counter.counter}</span>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default SagittariuxStatefull(CounterController)
```

## Get Started :rocket:

* Add the following in the dependencies of your package.json
```bash
npm install sagittariux
```

* Ready to use 
```jsx
import { SagittariuxBlackHole, SagittariuxStateless, SagittariuxStatefull } from 'sagittariux'
```

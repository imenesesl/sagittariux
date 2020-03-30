## Sagitttariux 

This project aims to have a default structure for state management, something similar to Redux but using Hooks

* ## SagittariuxBlackHole :milky_way:

This component is in charge of managing the state of all their children in the tree, to manage a general state of the entire application it is recommended to add it at the top of the gerarchy

#### Params

`reducers={reducersObject}`: Object that will contain the different states, these objects are segmented by reducers

#### Warning

The `reducers` object can only be built within a React component

#### Example

```jsx
const App = () => {
    const reducers = {
        test: useReducer(testReducer, initialStateTest)
    };
    return (
        <SagittariuxBlackHole
            reducers={reducers} >
            <div className='principal-container' >
                <LeftContainer />
                <RightContainer />
            </div>
        </ SagittariuxBlackHole>
    );
};

export default App;

```

* ## SagittariuxStateless :zzz:

This component can only access the state assigned to SagittariuxBlackHole and built by SagittariuxState

#### Inherited Parameters

`state`: Object with the different access keys to the previous reducers assigned to SagittariuxBlackHole

#### Example

```jsx
const LeftContainer = (props) => {
    return (
        <div className='view-container letf-container'>
            {props.state.test.counter}
        </div>
    );
};

export default SagittariuxStateless(LeftContainer);
```

* ## SagittariuxStatefull :fire:

This component unlike SagittariuxStateless can access the state and dispatch assigned to SagittariuxBlackHole and built by SagittariuxState

#### Inherited Parameters

`state`: Object with the different access keys to the previous reducers assigned to SagittariuxBlackHole

`dispatch`: Function that receives an action as a parameter, this action is directly associated with the state to be modified by reducing

#### Example

```jsx
const RightContainer = (props) => {
    return (
        <div className='view-container right-container'>
            <button onClick={() => props.dispatch(addAction(1))} >
                ADD
            </button>
            <button onClick={() => props.dispatch(substractAction(1))} >
                SUBSTRACT
            </button>
        </div>
    );
};

export default SagittariuxStatefull(RightContainer);
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

## Run Demo :shipit:

* Clone this repository
```bash
git clone https://github.com/imenesesl/sagittariux.git
```

* Execute the following line
```bash
npm i
```

* Run demo
```bash
npm run demo
```

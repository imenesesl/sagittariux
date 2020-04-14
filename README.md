## Sagitttariux 

This project aims to have a default structure for state management

* ## Provider :milky_way:

This component is in charge of managing the state of all their children in the tree, to manage a general state of the entire application it is recommended to add it at the top of the gerarchy

#### Params

`store`: Object that will contain the different stores, these objects are segmented by reducers
`children`: Displayed whatever you include between the opening and closing tags when invoking a component

#### Warning

The `store` object can only be built within a React component

#### Example

```jsx
const App = () => {
    const store = {
        test: useReducer(testReducer, initialStateTest)
    };
    return (
        <Provider
            store={store} >
            <div className='principal-container' >
                <LeftContainer />
                <RightContainer />
            </div>
        </ Provider>
    );
};

export default App;

```

## useConnect :fire:

`dispatch`: Function that receives an action as a parameter, this action is directly associated with the store to be modified by reducing

`store`: Object with the different access keys to the previous stores assigned to Provider

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
            <div className='view-container letf-container'>
                {props.store.test.counter}
            </div>
        </div>
    );
};

export default useConnect(RightContainer);
```

## Get Started :rocket:

* Add the following in the dependencies of your package.json
```bash
npm install sagittariux
```

* Ready to use 
```jsx
import { Provider, useConnect } from 'sagittariux'
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

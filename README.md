# Sagitttariux

#### `Super lightweight package to manage your application status`

- ## Provider

This component is in charge of managing the state of all their children in the tree, to manage a general state of the entire application it is recommended to add it at the top of the gerarchy

#### Params

```ts
const Provider: (provider: ProviderProps) => JSX.Element
```

`store` Object that will contain the different stores, these objects are segmented by reducers

`children` Displayed whatever you include between the opening and closing tags when invoking a component

#### Warning ⚠️

The `store` object can only be built within a React component

#### Example

```tsx
const App = () => {
  const store = {
    test: useReducer(testReducer, initialStateTest),
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
```

- ## connect

### Params

```ts
const connect: (stateProps: (state: Reducers) => Object, dispatchProps: Dispatch) => (Component: any) => typeof (Anonymous class)
```

The `connect()` function connects a React component to a Sagittariux store.

It provides your connected component with the parts of the data that it needs from the store and the functions that it can use to send actions to the store.

It does not modify the class of component passed to it; instead it returns a new connected component class that wraps the component you passed to it.

#### Example

```tsx
/*A*/

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

/*B*/

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
```

## Get Started :rocket:

- Add the following in the dependencies of your package.json

```bash
npm install sagittariux
```

- Ready to use

```ts
import { Provider, connect } from "sagittariux"
```

## Run Demo :shipit:

- Clone this repository

```bash
git clone https://github.com/imenesesl/sagittariux.git
```

- Open project

```bash
cd sagittariux
```

- Execute the following line

```bash
npm i
```

- Run demo

```bash
npm run demo
```

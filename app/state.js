const {createStore} = Redux;

// const counter = (state=0, action) => {
//   switch(action.type) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const store = createStore(counter);

// const Counter = ({
//   value,
//   onIncrement,
//   onDecrement
// }) => {
//   return (
//   <div>
//     <h1> {value} </h1>
//     <button onClick={onIncrement}>+</button>
//     <button onClick={onDecrement}>-</button>
//   </div>
// )};

// const render = () => {ReactDom.render( <Counter
//   value={store.getState()}
//   onIncrement={()=> store.dispatch({type: 'increment'})}
//   onDecrement={() => store.dispatch({type: 'decement'})}
//   />, document.getElementById('app'));
// };

// store.subscribe(render);
// render();
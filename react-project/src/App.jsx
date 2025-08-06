
import Counter from './class components/Counter';
import ToggleText from './class components/ToggleText';
import InputMirror from './class components/InputMirror';
import SimpleTodo from './class components/SimpleTodo';
import { Component } from 'react';
import Timer from './class components/reactLifeCycle/Timer';
import NetworkStatus from './class components/reactLifeCycle/Network_status';
import Counters from './class components/reactLifeCycle/Counter';
import UserCart from './class components/reactLifeCycle/UserCart';
import MiniCalculator from './functionComponent/pureFunction/MiniCalculator';
import Todo from './functionComponent/pureFunction/Todo';
import Logger from './functionComponent/impureFunction/Logger';
import Product from './liftedstate/parentcomponent/Product';
import Parent from './propsDriling/parent/Parent';
import FocusInput from './hooks/useRef/FocusInput';
import AutoFocusInput from './hooks/useRef/AutoFocusInput';
import { CartContextProvider } from './contex/CartContext';
import ProductList from './hooks/useReducer/ProductList';
import Cart from './liftedstate/childscomonent/Cart';
import Productcart from './hooks/useReducer/ProductCart';
import ExpenseReducer from './hooks/useReducer/ExpenseReducer';
import SwapAndBuyApp from './hooks/useReducer/SwapAndBuyApp';
import SignUpForm from './components/SignUpForm';
import UseMemo from './hooks/performeOptimiz/UseMemo';
import GroceryPlanner from './hooks/performeOptimiz/GroceryPlanner';
import JobComparison from './hooks/performeOptimiz/JobComparison';
class App extends Component {
  constructor() {
    super()
    this.state = { showTimer: true }
  }

  toggleTmimer = () => {
    this.setState((prev) => ({ showTimer: !prev.showTimer }))
  }



  render() {
    return (
      <CartContextProvider>
        <Counter />
        <ToggleText />
        <InputMirror />
        <SimpleTodo />

        {/* Timer app*/}
        <div>
          <h1>Timer</h1>
          <button onClick={this.toggleTmimer}>{this.state.showTimer ? "Stop" : "start"}</button>
          <hr />
          {this.state.showTimer ? <Timer /> : 0}
        </div>

        {/* network trakcer */}
        <NetworkStatus />

        {/* lifecycle counter*/}
        <Counters />

        {/* api fetchimg*/}
        <UserCart />

        {/* pure function */}
        <MiniCalculator />

        {/* pure */}
        <Todo />

        {/*impure  function */}
        <Logger />

        {/* lifted state */}
        <Product />

        {/* props driling */}
        <Parent />
        
        {/**useRef */}
        <FocusInput />
        <AutoFocusInput />

        {/** use  reducer */}
        <ProductList />
        <Productcart />
        <ExpenseReducer />
        <SwapAndBuyApp />

        {/**custom hook */}
        <SignUpForm />

        {/**use memo */}
        <UseMemo />
        <GroceryPlanner />
        <JobComparison />


      </CartContextProvider>
    )
  }
}

export default App

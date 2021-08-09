import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Provider} from 'react-redux'
import store from './Redux/store'
import Counter from "./Components/Counter";
import CounterRedux from './Components/Counter/Redux'
import CounterReducer from './Components/Counter/Reducer'

import TestMask from './Components/Mask/TestMask'

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box'
  }
}

const App = () => {

  return (
    <Provider store={store}>
      <div style={styles.container} >
        <Router>
          <Switch>          
            <Route path='/counter/redux' exact>
              <CounterRedux />
            </Route>
            <Route path='/counter/reducer' exact>
              <CounterReducer />
            </Route>
            <Route path='/' exact>
              <Counter />
            </Route>            
            <Route path='/mask' exact>
              <TestMask />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App;

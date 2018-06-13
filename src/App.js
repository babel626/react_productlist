import React, {Component} from 'react';
import './App.css';

import ProductList from './components/productList';

class App extends Component{

    render(){
        return (
          <div className={'container'}>
              <h1>Welcome to my shop</h1>
              <ProductList />
          </div>
        );
    }

}

export default App;
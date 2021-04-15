import React, { Component } from 'react';
import Header from './component/Header'
import Product from './component/Product'
class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <Product />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <Product />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <Product />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <Product />
        </div>
      </div>
    );
  }
}

export default App;

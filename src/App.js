import React, { Component } from 'react';
// import Header from './component/Header'
import Product from './component/Product'
class App extends Component {

  onClick(){
    console.log('this is an app component')
  }
  render() {

    let product = [
      {
        id: 1,
        name: "Iphone 11 Pro max",
        price: "15.000.000Đ",
        desc: "Bộ nhớ: Ram 6GB/128GB",
        image: "https://24hstore.vn/images/products/2020/10/14/large/iphone-12-pro-gold.jpg",
        status: true,
      },
      {
        id: 2,
        name: "Iphone 12 Pro max",
        price: "24.000.000Đ",
        desc: "Bộ nhớ: Ram 6GB/128GB",
        image: "https://24hstore.vn/images/products/2020/10/14/large/iphone-12-pro-gold.jpg",
        status: true,
      },
      {
        id: 3,
        name: "Iphone XS max",
        price: "20.000.000Đ",
        desc: "Bộ nhớ: Ram 6GB/128GB",
        image: "https://24hstore.vn/images/products/2020/10/14/large/iphone-12-pro-graphite.jpg",
        status: false,
      }
    ]

    let elements = product.map((product, idx) => {
      if (product.status) {
        return <Product
          id = {product.id}
          key={product.id}
          name={product.name}
          price={product.price}
          desc={product.desc}
          status={product.status}
          image={product.image}>
          {product.name}
        </Product>
      }
    })
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-primary" onClick={this.onClick}>Click me</button>

            </div>
          </div>
        </div>

      </>




    );
  }
}

export default App;

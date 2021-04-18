import React, { Component } from 'react';
// import Header from './component/Header'
// import Product from './component/Product'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
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
      ],
      isActive: true
    };

  }

  onSetState = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {



    let elements = this.state.products.map((product, idx) => {
      if (this.state.isActive) {
        if (product.status) {
          return <tr key={idx}>
            <td>{idx}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        }
      }

    })
    return (
      <>
        <div className="container">
          <div className="row">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá sản phẩm</th>
                </tr>
              </thead>
              <tbody>
                {elements}
              </tbody>
            </table>
            <button type="button" className="btn btn-primary" onClick={this.onSetState}>
              Active: {this.state.isActive === true ? 'true' : 'false'}</button>
          </div>
        </div>

      </>
    );
  }
}

export default App;

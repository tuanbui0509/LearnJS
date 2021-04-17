
import React, { Component } from 'react';

class Product extends Component {
    // event 1
    onAddToCart (name) {
        alert('Tên là'+' '+name);
    }
    //  event 2
    constructor(props) {
        super(props);
        this.onAddToCart1 = this.onAddToCart1.bind(this)

    }
    onAddToCart1() {
        alert('Giá'+' - '+this.props.price)
    }

    // event 3
    onAddToCart2 = () => {
        alert('Trạng thái'+' '+this.props.status);
    }


    render() {
        return (
            <div> <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <a href="#" className="thumbnail">
                    <img src={this.props.image} alt={this.props.name} />
                    <h3>{this.props.children}</h3>
                    <p>{this.props.price}</p>
                    <p>{this.props.desc}</p>
                    <p>
                        <a className="btn btn-primary" onClick={() => { this.onAddToCart(this.props.name) }} >Xem tên</a>
                        <a className="btn btn-danger" onClick={this.onAddToCart1}>Xem giá</a>
                        <a className="btn btn-info" onClick={this.onAddToCart2}>Xem trạng thái</a>
                    </p>
                </a>
            </div>
            </div>
        );
    }
}

export default Product;

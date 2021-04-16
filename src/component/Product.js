
import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div> <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <a href="#" className="thumbnail">
                    <img src={this.props.image} alt={this.props.name} />
                    <h3>{this.props.children}</h3>
                    <p>{this.props.price}</p>
                    <p>{this.props.desc}</p>
                    <p>
                        <a className="btn btn-primary">Mua ngay</a>
                    </p>
                </a>
            </div>
            </div>
        );
    }
}

export default Product;

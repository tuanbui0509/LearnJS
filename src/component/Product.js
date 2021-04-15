
import React, { Component } from 'react';

class Product extends Component {
    showInfoProduct(product) {
        if (product.status) {
            return <div>
                <a href="#" className="thumbnail">
                    <img src="https://stcv4.hnammobile.com/uploads/products/colors/7/apple-iphone-12-pro-128gb-vn-a-01603708075.jpg" alt="" />
                </a>
                <p>id : {product.id}</p>
                <p>Tên : {product.name}</p>
                <p>Giá : {product.price}</p>
                <p>Trạng thái : {product.status ? 'Active' : 'Pending'}</p>
            </div>
        }
    }



    render() {
        let product = {
            id: 1,
            name: 'Iphone 12 Pro max',
            price: 34000000,
            status: true,
        };

        let users = [
            {
                id: 1,
                name: 'Nguyen Van A',
                age: 23
            }, {
                id: 2,
                name: 'Nguyen Van B',
                age: 23
            }, {
                id: 3,
                name: 'Nguyen Van C',
                age: 23
            },
        ]



        let element = users.map((user,idx)=>{
            return <div key={idx}>
                <h2>Ten: {user.name}</h2>
                <h2>Tuoi: {user.age}</h2>
            </div>
        })

        return (
            <div>
                { this.showInfoProduct(product)}
                <br/>
                <hr/>
                {element}
            </div>
        );
    }
}

export default Product;

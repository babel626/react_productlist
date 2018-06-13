import React, {Component} from 'react';
import './css/productList.css';

class productList extends Component{

    constructor(){
        super();
        this.state = {
            products: [],
            errors: []
        }

        this.addProduct = this.addProduct.bind(this);
    }

    addProduct(e){
        e.preventDefault();

        var newProduct = {
            name: this.Name.value,
            price: this.Price.value,
            key: Date.now()
        }

        this.setState(
            (prevState) => {
                return {
                    products: prevState.products.concat(newProduct)
                }
            }
        );
        this.Name.value = "";
        this.Price.value = "";
    }

    createListElement(product){
        return (
            <div className={'product'} key={product.key}>
                <span className={'name'}>{product.name}</span>
                <span className={'price'}>{product.price}</span>
            </div>
        )
    }

    render(){
        var ProductList = this.state.products.map(this.createListElement);
        return (
            <div className={'prodContainer'}>
                <h2>Add product...</h2>
                <form onSubmit={this.addProduct}>
                    <input placeholder={'name'} ref={(a) => this.Name = a} />
                    <input placeholder={'price'} ref={(a) => this.Price = a} />
                    <button type={'submit'}>+</button>
                </form>
                {ProductList}
            </div>
        );
    }
}

export default productList;
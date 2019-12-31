import React,{Component} from 'react';
import '../Products.scss';
import Product from "../../Product/ProductHim/ProductHim";
/*import ProductHer from '../ProductHer/ProductHer';*/
import Title from '../Title';
import {ProductConsumer} from '../../../../context/context';

class Products extends Component{

    render() {

        return (
            <>
                <div className={'py-5'}>
                    <div className="container">
                        <Title name={'DLA'} title={'NIEGO'}/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product
                                            key={product.id}
                                            product={product}
                                        />
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Products;

import React,{Component} from 'react';
import '../Products.scss';
import Product from "../../Product/ProductHer/ProductHer";
/*import ProductHer from '../ProductHer/ProductHer';*/
import Title from '../Title';
import {ProductConsumer} from '../../../../context/context';

class ProductsHer extends Component{

    render() {

        return (
            <>
                {/*<ProductHer/>*/}
                <div className={'py-5'}>
                    <div className="container">
                        <Title name={'DLA'} title={'NIEJ'}/>
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

export default ProductsHer;

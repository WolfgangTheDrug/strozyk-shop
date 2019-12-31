import React,{Component} from 'react';
import '../Product.scss';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../../../../context/context";
import PropTypes from 'prop-types';

export default class ProductHim extends Component {
    render() {
        const {id, /*type,*/ title, /*collection, color,*/ img, price, /*info,*/ inCart/*, count, total*/} = this.props.product;
        return (<>
            <ProductWrapper className={'col-9 mx-auto col-md-6 col=lg-3 my-3'}>
                <div className="card">
                    <ProductConsumer>
                        {value => (<div
                            className={'img-container p-5'}
                            onClick={() => {
                                value.handleDetail(id)
                            }}>
                            <Link to={'/shop/details'}>
                                <img
                                    src={img}
                                    alt={title}
                                    className={'card-img-top'}/>
                            </Link>

                            <button className={'cart-btn'} disabled={!!inCart}
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                            >
                                {inCart? <p className={'text-capitalize mb-0'} disabled="True">
                                    Już w koszyku
                                </p> : <p className={'text-capitalize mb-0'} enabled="True">
                                    Dodaj do koszyka
                                </p>}
                            </button>
                        </div>)}

                    </ProductConsumer>
                    {/*card footer*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className={'align-self-center mb-0'}>{title}</p>
                        <h5 className="font-italic mb-0">
                            <span className="mr-1">{price}zł</span>
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        </>)
    }
}

ProductHim.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        title: PropTypes.string,
        collection: PropTypes.string,
        color: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        info: PropTypes.string,
        inCart: PropTypes.bool,
        count: PropTypes.number,
        total: PropTypes.number
    }).isRequired
};

const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    border-radius: 0;
    background-color: black;
    transition: all 0.2s linear;
    color: white;
    
    &:hover {
        border-color: black;
        background-color: #060606;
    }
    
    .card-footer{
        background: transparent;
        border-top: transparent;
    }
}
.img-container {
    position: relative;
    overflow: hide;
    
    
    &:hover .card-img-top{
    transition: all .09s linear;
        transform: scale(.97);
    }
}
`;

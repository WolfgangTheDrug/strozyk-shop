import React, {Component} from 'react';
import {ProductConsumer} from "../../../context/context";
import {Link} from "react-router-dom";
//buttonCOntainer?

class Details extends Component {
    render() {
        return (
            <div className="basic-bg">
                <ProductConsumer>
                   {value=>{
                       const {id, /*type, */title, collection,/* color,*/ img, price, /*info, */inCart/*, count, total*/} = value.detailProduct;
                       return (
                           <div className={"container"}>
                               <div className={"py-5"}>
                                   <div className="row">
                                       <div className="col-10 mx-auto text-center text-slanted my-5">
                                           <h1>{title}</h1>
                                       </div>
                                   </div>
                                   <div className="row">
                                       <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                           <img src={img} alt={title} className={'img-fluid'}/>
                                       </div>
                                       <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                           <h2>{title}</h2>
                                           <h4 className={'text-title text-uppercase text-mutes mt-3 mb-2'}>
                                               Kolekcja: {collection}
                                           </h4>
                                           <h4>Cena: {price}</h4>
                                           <h4>INNE INFO TUTAJ</h4>
                                           <div>
                                               <Link to={'/shop/her'}>
                                                   <button>Powrót</button>
                                               </Link>
                                               <button disabled={!!inCart} onClick={()=>{
                                                   value.addToCart(id);
                                                   value.openModal(id);
                                               }}>
                                                   {inCart?'Dodano':'Dodaj'}
                                               </button>

                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       )
                }}
                </ProductConsumer>
            </div>
        );
    }
}

export default Details;
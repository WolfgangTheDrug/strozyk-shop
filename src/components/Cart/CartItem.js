import React from 'react';

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;

    return (
        <div className={"row my-2 text-capitalize text-center"}>
            <div className="col-10 mx-auto col-lg-2"> {/*pierwsza kolumna*/}
                <img src={img} style={{width:'5rem',height:'6rem'}}
                className={"img-fluid"} alt={'product'}/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">produkt: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">cena: </span>
                {price}zł
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span
                            className="btn btn-black mx-1"
                            onClick = { () => decrement(id) }> -
                        </span>
                        <span
                            className="btn not-btn-white mx-1">
                            {count}
                        </span>
                        <span
                            className="btn btn-black mx-1"
                            onClick = { () => increment(id) }> +
                        </span>
                    </div> {/*4:46:34*/}
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon">
                    <i
                        className="fas fa-trash"
                        onClick={() => removeItem(id)}/>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>{total}zł</strong>
            </div>
        </div>
    );
}

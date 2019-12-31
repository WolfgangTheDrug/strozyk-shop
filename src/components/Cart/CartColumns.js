import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Produkt</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Nazwa</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Ilość</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Cena</p>
                </div>
                {/*04:20:30*/}
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Usuń</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>
                {/*
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">products</p>
                </div>*/}

            </div>
        </div>
    )
}
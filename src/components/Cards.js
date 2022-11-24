import React from 'react'
import product from "../Product.json"
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <>
            <div className="product-big-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-bit-title text-center">
                                <h2>Shop Now</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-product-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">

                        {
                            product.map(
                                (elemento) =>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="single-shop-product">
                                            <div className="product-upper">
                                                <img src={elemento.img} width="300px" alt="" />
                                            </div>
                                            <h2>{elemento.title}</h2>
                                            <h2><Link to="/detalle">Ver detalles</Link></h2>

                                            <div className="product-carousel-price">
                                                <ins>${elemento.precio}</ins> <del>{elemento.precioAnterior}</del>
                                            </div>

                                            <div className="product-option-shop">
                                                <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-pagination text-center">
                                <nav>
                                    <ul className="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Cards
import React, { Component } from 'react';
import './index.css';
import axios from 'axios'

import product_image_1 from '../../../assets/products/8.png'
import product_image_2 from '../../../assets/products/5.png'
import product_image_3 from '../../../assets/products/6.png'
import product_image_4 from '../../../assets/products/4.png'
import product_image_5 from '../../../assets/products/9.png'
import product_image_6 from '../../../assets/products/10.png'
import product_image_8 from '../../../assets/products/11.png'
import { Link } from 'react-router-dom';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { posts } = this.state;
        return (

            <div className="product">
                <div className="container-fluid">
                    <div className="row">

                        {/* Repeat Category */}
                        <div className="col-12 mb-4 mb-lg-5 px-2 pl-lg-0 pr-lg-3">
                            <div className="d-flex mb-3">
                                <div>
                                    <h4 className="text-capitalize text-uniq-dark mb-0 mt-2">mobile</h4>
                                </div>
                                <div className="ml-auto">
                                    <Link to="/" className="btn uniq-btn shadow-none">View All</Link>
                                </div>
                            </div>
                            <div className="products">
                                {/* Repeat Product */}
                                {
                                    posts.length ?
                                        posts.map(post =>
                                            <div className="card product-card" key={post.id}>
                                                <div className="card-body">
                                                    <div className="img-box">
                                                        <img src={product_image_1} className="img-fluid" alt="Product" />
                                                        <div className="product-overlay">
                                                            <div className="flex-center flex-column">
                                                                <button className="btn product-btn shadow-none">Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-content p-2">
                                                        <p className="mb-1 text-capitalize name">product name {post.id}</p>
                                                        <p className="mb-2 price">220tk</p>
                                                        <Link to={`/category/${post.id}`} type="button" className="btn shadow-none">View</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        null
                                }

                                {/* End Repeat Product */}
                            </div>
                        </div>
                        {/* End Repeat Category */}

                        {/* Repeat Category */}
                        <div className="col-12 mb-4 mb-lg-5 px-2 pl-lg-0 pr-lg-3">
                            <div className="d-flex mb-3">
                                <div>
                                    <h4 className="text-capitalize text-uniq-dark mb-0 mt-2">headphone</h4>
                                </div>
                                <div className="ml-auto">
                                    <Link to="/" className="btn uniq-btn shadow-none">View All</Link>
                                </div>
                            </div>
                            <div className="products">
                                {/* Repeat Product */}
                                {
                                    posts.length ?
                                        posts.map(post =>
                                            <div className="card product-card" key={post.id}>
                                                <div className="card-body">
                                                    <div className="img-box">
                                                        <img src={product_image_5} className="img-fluid" alt="Product" />
                                                        <div className="product-overlay">
                                                            <div className="flex-center flex-column">
                                                                <button className="btn product-btn shadow-none">Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-content p-2">
                                                        <p className="mb-1 text-capitalize name">product name</p>
                                                        <p className="mb-2 price">220tk</p>
                                                        <Link to={`/category/${post.id}`} type="button" className="btn shadow-none">View</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        null
                                }

                                {/* End Repeat Product */}
                            </div>
                        </div>
                        {/* End Repeat Category */}

                        {/* Repeat Category */}
                        <div className="col-12 mb-4 mb-lg-5 px-2 pl-lg-0 pr-lg-3">
                            <div className="d-flex mb-3">
                                <div>
                                    <h4 className="text-capitalize text-uniq-dark mb-0 mt-2">laptop</h4>
                                </div>
                                <div className="ml-auto">
                                    <Link to="/" className="btn uniq-btn shadow-none">View All</Link>
                                </div>
                            </div>
                            <div className="products">
                                {/* Repeat Product */}
                                {
                                    posts.length ?
                                        posts.map(post =>
                                            <div className="card product-card" key={post.id}>
                                                <div className="card-body">
                                                    <div className="img-box">
                                                        <img src={product_image_3} className="img-fluid" alt="Product" />
                                                        <div className="product-overlay">
                                                            <div className="flex-center flex-column">
                                                                <button className="btn product-btn shadow-none">Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-content p-2">
                                                        <p className="mb-1 text-capitalize name">product name</p>
                                                        <p className="mb-2 price">220tk</p>
                                                        <Link to={`/category/${post.id}`} type="button" className="btn shadow-none">View</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        null
                                }

                                {/* End Repeat Product */}
                            </div>
                        </div>
                        {/* End Repeat Category */}

                        {/* Repeat Category */}
                        <div className="col-12 mb-4 mb-lg-5 px-2 pl-lg-0 pr-lg-3">
                            <div className="d-flex mb-3">
                                <div>
                                    <h4 className="text-capitalize text-uniq-dark mb-0 mt-2">watch</h4>
                                </div>
                                <div className="ml-auto">
                                    <Link to="/" className="btn uniq-btn shadow-none">View All</Link>
                                </div>
                            </div>
                            <div className="products">
                                {/* Repeat Product */}
                                {
                                    posts.length ?
                                        posts.map(post =>
                                            <div className="card product-card" key={post.id}>
                                                <div className="card-body">
                                                    <div className="img-box">
                                                        <img src={product_image_2} className="img-fluid" alt="Product" />
                                                        <div className="product-overlay">
                                                            <div className="flex-center flex-column">
                                                                <button className="btn product-btn shadow-none">Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-content p-2">
                                                        <p className="mb-1 text-capitalize name">product name</p>
                                                        <p className="mb-2 price">220tk</p>
                                                        <Link to={`/category/${post.id}`} type="button" className="btn shadow-none">View</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        null
                                }

                                {/* End Repeat Product */}
                            </div>
                        </div>
                        {/* End Repeat Category */}

                        {/* Repeat Category */}
                        <div className="col-12 mb-4 mb-lg-5 px-2 pl-lg-0 pr-lg-3">
                            <div className="d-flex mb-3">
                                <div>
                                    <h4 className="text-capitalize text-uniq-dark mb-0 mt-2">bike</h4>
                                </div>
                                <div className="ml-auto">
                                    <Link to="/" className="btn uniq-btn shadow-none">View All</Link>
                                </div>
                            </div>
                            <div className="products">
                                {/* Repeat Product */}
                                {
                                    posts.length ?
                                        posts.map(post =>
                                            <div className="card product-card" key={post.id}>
                                                <div className="card-body">
                                                    <div className="img-box">
                                                        <img src={product_image_6} className="img-fluid" alt="Product" />
                                                        <div className="product-overlay">
                                                            <div className="flex-center flex-column">
                                                                <button className="btn product-btn shadow-none">Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-content p-2">
                                                        <p className="mb-1 text-capitalize name">product name</p>
                                                        <p className="mb-2 price">220tk</p>
                                                        <Link to={`/category/${post.id}`} type="button" className="btn shadow-none">View</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        null
                                }

                                {/* End Repeat Product */}
                            </div>
                        </div>
                        {/* End Repeat Category */}

                        {/* Repeat Category */}
                        <div className="col-12 mb-4 mb-lg-5 px-2 pl-lg-0 pr-lg-3">
                            <div className="d-flex mb-3">
                                <div>
                                    <h4 className="text-capitalize text-uniq-dark mb-0 mt-2">car</h4>
                                </div>
                                <div className="ml-auto">
                                    <Link to="/" className="btn uniq-btn shadow-none">View All</Link>
                                </div>
                            </div>
                            <div className="products">
                                {/* Repeat Product */}
                                {
                                    posts.length ?
                                        posts.map(post =>
                                            <div className="card product-card" key={post.id}>
                                                <div className="card-body">
                                                    <div className="img-box">
                                                        <img src={product_image_8} className="img-fluid" alt="Product" />
                                                        <div className="product-overlay">
                                                            <div className="flex-center flex-column">
                                                                <button className="btn product-btn shadow-none">Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-content p-2">
                                                        <p className="mb-1 text-capitalize name">product name</p>
                                                        <p className="mb-2 price">220tk</p>
                                                        <Link to={`/category/${post.id}`} type="button" className="btn shadow-none">View</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        null
                                }

                                {/* End Repeat Product */}
                            </div>
                        </div>
                        {/* End Repeat Category */}

                        {/* Repeat Category */}
                        <div className="col-12 mb-4 mb-lg-5 px-2 pl-lg-0 pr-lg-3">
                            <div className="d-flex mb-3">
                                <div>
                                    <h4 className="text-capitalize text-uniq-dark mb-0 mt-2">winter dress</h4>
                                </div>
                                <div className="ml-auto">
                                    <Link to="/" className="btn uniq-btn shadow-none">View All</Link>
                                </div>
                            </div>
                            <div className="products">
                                {/* Repeat Product */}
                                {
                                    posts.length ?
                                        posts.map(post =>
                                            <div className="card product-card" key={post.id}>
                                                <div className="card-body">
                                                    <div className="img-box">
                                                        <img src={product_image_4} className="img-fluid" alt="Product" />
                                                        <div className="product-overlay">
                                                            <div className="flex-center flex-column">
                                                                <button className="btn product-btn shadow-none">Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-content p-2">
                                                        <p className="mb-1 text-capitalize name">product name</p>
                                                        <p className="mb-2 price">220tk</p>
                                                        <Link to={`/category/${post.id}`} type="button" className="btn shadow-none">View</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        null
                                }

                                {/* End Repeat Product */}
                            </div>
                        </div>
                        {/* End Repeat Category */}

                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
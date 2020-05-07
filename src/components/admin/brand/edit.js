import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class BrandEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brandName: ""
        }
    }

    onChangeBrandName = (event) => {
        this.setState({ brandName: event.target.value })
    }

    submitHandle = (event) => {
        event.preventDefault();
        console.log(this.state.brandName)
    }

    render() {
        return (
            <div>
                <div className="container-fluid brand_edit">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                <div className="mt-1"><h5>Edit Brand</h5></div>
                                <div className="ml-auto">
                                    <Link to="/admin/brands" className="btn btn-uniq rounded-0 shadow-sm text-white"><i className="fas fa-arrow-left"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="card rounded-0 border-0 shadow-sm">
                                <div className="card-body">
                                    <form onSubmit={this.submitHandle}>
                                        {/* Brand Name */}
                                        <div className="form-group mb-3">
                                            <small>Brand Name</small>
                                            <input type="text" className="form-control rounded-0 shadow-none" onChange={this.onChangeBrandName} />
                                        </div>

                                        <button type="submit" className="btn btn-uniq rounded-0 shadow-sm text-white px-4 py-2 upload-btn float-right">Update</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandEdit;
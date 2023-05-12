import React, { Component } from 'react'
import pic from "../asstest/images/no.png"
export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
                <div className="card">
                    <img src={this.props.pic?this.props.pic:pic} height="200px" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title heading">{this.props.title?this.props.title.slice(0,100)+"...":""}</h5>
                            <p className="card-text text-center" style={{fontSize:"13px"}}>Date : {this.props.date}</p>
                            <p className="card-text source">{this.props.source}</p>
                            <p className="card-text desc">{this.props.description}</p>
                            <a href={this.props.url} className="btn mybtn background text-light w-100">Read Full Article</a>
                        </div>
                </div>
            </div>
        )
    }
}

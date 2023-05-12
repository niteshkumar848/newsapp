import React, { Component } from 'react'
import "../asstest/css/style.css"
import { Link } from "react-router-dom"
export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
            input:"None"
        }
    }
    getData(e){
        this.setState({input:e.target.value})
    }
    search(e){
        e.preventDefault()
        this.props.changeSearch(this.state.input)
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg background sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/">All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/politics">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/crime">Crime</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/education">Education</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/technology">Technology</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/science">Science</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/Jokes">Jokes</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/entertainment">Entertainment</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <button className="dropdown-item"  onClick={()=>this.props.changeLanguage("hi")}>Hindi</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item"   onClick={()=>this.props.changeLanguage("en")}>English</button>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Article-Size
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <button className="dropdown-item"  onClick={()=>this.props.changePageSize("8")}>8</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item"   onClick={()=>this.props.changePageSize("12")}>12</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item"   onClick={()=>this.props.changePageSize("16")}>16</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item"   onClick={()=>this.props.changePageSize("20")}>20</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e)=>this.search(e)}>
                            <input className="form-control me-2" onChange={(e)=>this.getData(e)} name='input' type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

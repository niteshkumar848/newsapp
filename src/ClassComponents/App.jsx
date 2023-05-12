import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import News from './News'
export default class App extends Component {
    constructor(){
        super()
        this.state={
            language:"hi",
            pageSize:8,
            search:"None"
        }
    }
    changeLanguage = (data)=>{
        this.setState({language:data})
    }
    changePageSize = (data)=>{
        data=parseInt(data)
        this.setState({pageSize:data})
    }
    changeSearch = (data)=>{

        this.setState({search:data})
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar changeSearch={this.changeSearch} changePageSize={this.changePageSize} changeLanguage={this.changeLanguage}/>
                    <Routes>
                        <Route path='/' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="All"/>}></Route>
                        <Route path='/politics' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Politics"/>}></Route>
                        <Route path='/sports' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Sports"/>}></Route>
                        <Route path='/crime' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Crime"/>}></Route>
                        <Route path='/education' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Education"/>}></Route>
                        <Route path='/technology' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Technology"/>}></Route>
                        <Route path='/science' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Science"/>}></Route>
                        <Route path='/jokes' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Jokes"/>}></Route>
                        <Route path='/entertainment' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Entertainment"/>}></Route>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </>
        )
    }
}

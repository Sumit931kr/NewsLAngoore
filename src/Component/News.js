import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class news extends Component {
 
    constructor() {
        super()
        console.log("This is  constructor from News Component")
        this.state = {
            articles: [],
            loading: false,
        }

    }


async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3530665078ab4ff1a9dcedaf8d3ee742"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles : parsedData.articles})
}




    render() {
        return (
            <div className="container my-3">
                <h2>NewsLAngoore - Top Headlines</h2>
                <div className="row md-3">
                    {this.state.articles.map((element) => {

                        return <div className="col md-3" key={element.url}>
                            <Newsitem  title={element.title?element.title:""} description={element.description?element.description.slice(0,95):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}

                </div>

            </div>
        )
    }
}

export default news

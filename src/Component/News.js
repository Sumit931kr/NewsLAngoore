import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class news extends Component {

    constructor() {
        super()
        console.log("This is  constructor from News Component")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0,
      
        }

    }


    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3530665078ab4ff1a9dcedaf8d3ee742&pageSize=15"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
        })
    }

    handlePrevclick = async () => {
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3530665078ab4ff1a9dcedaf8d3ee742&page=${this.state.page - 1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextclick = async () => {
        console.log("Next")

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3530665078ab4ff1a9dcedaf8d3ee742&page=${this.state.page + 1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }



    render() {
        return (
            <div className="container my-3">
                <h2>NewsLAngoore - Top Headlines</h2>
                <div className="row md-3">
                    {this.state.articles.map((element) => {

                        return <div className="col md-3" key={element.url}>
                            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 95) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-primary btn-lg btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
                    <button disabled={ this.state.page + 1  > Math.ceil(this.state.totalResults/15)} className="btn btn-warning btn-lg btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default news

import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class news extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 7,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("This is  constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

async updateNews(){
  this.setState({ loading: true });
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3530665078ab4ff1a9dcedaf8d3ee742&o&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading: false,
  });
}

  async componentDidMount() {
   this.updateNews();
  }

  handlePrevclick = async () => {

    this.setState({page: this.state.page -1})
    this.updateNews();
  };

  handleNextclick = async () => {
 
    this.setState({page: this.state.page +1})
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="d-flex justify-content-center">
          NewsLAngoore - Top Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row md-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col md-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 95)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between position-relative">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary btn-lg btn-dark "
            onClick={this.handlePrevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            className="btn btn-warning btn-lg btn-dark "
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default news;

import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class news extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 10,
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

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3530665078ab4ff1a9dcedaf8d3ee742&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevclick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=3530665078ab4ff1a9dcedaf8d3ee742&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextclick = async () => {
    console.log("Next");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=3530665078ab4ff1a9dcedaf8d3ee742&page=${
      this.state.page + 1
    }&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
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

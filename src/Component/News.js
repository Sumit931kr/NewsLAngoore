import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


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

 capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,

    };
    document.title= `NewsLAngoore - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

async updateNews(){
  this.props.setProgess(10);
  this.setState({ loading: true });
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&o&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  this.props.setProgess(35);
 let parsedData = await data.json();
  this.props.setProgess(75);
  this.setState({
    articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading: false,
  });
  this.props.setProgess(100);
}
fetchMoreData = async () => {

   this.setState({page: this.state.page +1})
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&o&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   
   let data = await fetch(url);
   let parsedData = await data.json();
   this.setState({
     articles: this.state.articles.concat(parsedData.articles),
     totalResults: parsedData.totalResults,
   });

  };
  
    async componentDidMount() {
     this.updateNews();
    }
  
   

  render() {
    return (
    <>
    <br />
    <br /><br />
        <h2 className="d-flex justify-content-center">
          NewsLAngoore - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
    <div className="container">

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
        </div>
        </InfiniteScroll>
     
    
  </>
    );
  }
}

export default news;

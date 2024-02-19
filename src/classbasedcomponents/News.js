import React, { Component } from 'react'
import Newsitem from './Newsitems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "us",
        category: "business",
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state =({
            articles:[],
            loading: false,
            page:1,
            totalResults:0
        })

    }
    async updateNews(){
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=5`;
        this.setState({loading: true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(60);
        this.setState=({
            articles:parsedData.articles,
            loading : false,
            totalResults : parsedData.totalResults,

        })
        this.props.setProgress(100)


    }
    async componentDidMount(){
        document.title = `${this.capitalize(this.props.category)}-NewSExpress`;
        this.updateNews();

    }
    async fetchMoreData(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=5`;
        this.setState({page: this.state.page- + 1});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState=({
            articles: this.state.articles.concat(parsedData.articles),
            loading : false,
            totalResults : parsedData.totalResults

        })



    }

   
    
    
  render() {
    return (
      
        <>

        <h2 className='text-center' id='not'>NewSExpress - Top {this.capitalize(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}>
            <div className='container' id='contained'>
                <div className='row'>
                    {this.state.articles && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                                    <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                    })}



                </div>
            </div>
        </InfiniteScroll>
        <div className='container d-flex justify-content-between'>
            {/* <button disabled={page<=1} type="button" className="btn btn-success" onClick={handlePrevClick}>Previous</button> */}
            {/* <button disabled={articles.length===0} type="button" className="btn btn-success" onClick={handleNextClick}>Next</button> */}

        </div>



    </>
    )
  }
}

export default News
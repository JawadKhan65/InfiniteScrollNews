import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a71408bbeb394bbabdd24104593f3003&page=1&pageSize=5`;

        setloading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setloading(false);
        settotalResults(parsedData.totalResults);
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${capitalize(props.category)}-NewSExpress`

        updateNews();
        /* eslint-disable */
    }, [])




    // const handlePrevClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}207409ef21e848cc8234f6ffdd9f895d&page=1`;

    //     setloading(true)
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     setPage(page - 1)
    //     setArticles(parsedData.articles)
    //     setloading(false)


    // }
    // const handleNextClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}207409ef21e848cc8234f6ffdd9f895d&page=1&pageSize=5`;

    //     setloading(true)
    //     let data = await fetch(url);
    //     let parsedData = await data.json();

    //     if (parsedData.articles.length === 0) {
    //         return;
    //     }
    //     setPage(page + 1)
    //     setArticles(parsedData.articles)
    //     setloading(false)
    // }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a71408bbeb394bbabdd24104593f3003&page=${page + 1}&pageSize=5`;
        setPage(page + 1)

        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);

    };



    return (
        <>

            <h2 className='text-center' id='not'>NewSExpress - Top {capitalize(props.category)} Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={100}
                next={fetchMoreData}
                hasMore={totalResults && articles.length !== totalResults}
                loader={<Spinner />}>
                <div className='container' id='contained'>
                    <div className='row'>
                        {articles.map((element) => {
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

News.defaultProps = {
    country: "us",
    category: "bussiness",
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}

export default News
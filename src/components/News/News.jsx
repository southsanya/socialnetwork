// import classes from './News.module.css'
import React from "react";
import { newsData } from "./NewsData";
import classes from './News.module.css'


const News = () => {
    return (
        <div className={classes.news}>
            {newsData.map(news => <div className={classes.newsWrapper}>
                <div className={classes.title}>
                    {news.title}
                </div>
                <div className={classes.imageWrapper}>
                    <img src={news.images} className={classes.image} alt="" />
                </div>
                <div className={classes.description}>
                    {news.description}
                </div>
                <div className={classes.author}>
                    {news.author}
                </div>
            </div>)}
        </div>
    )
}

export default News;
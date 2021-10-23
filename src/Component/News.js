import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class news extends Component {
    articles = [

        {
            source: {
                id: "bbc-news",
                name: "BBC News"
            },
            author: null,
            title: "Chairman Watmore leaves ECB, only 13 months into five-year term",
            description: "Chairman Ian Watmore leaves the England and Wales Cricket Board only 13 months into a five-year term.",
            url: "https://www.bbc.co.uk/sport/cricket/58831143",
            urlToImage: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14379/production/_120890828_ian_watmore_getty.jpg",
            publishedAt: "2021-10-07T11:40:19Z",
            content: "Ian Watmore (left) presents Warwickshire captain Will Rhodes, CEO Stuart Cain and chairman Will McCafferty with the County Championship trophy last month Chairman Ian Watmore has left the England an… [+1272 chars]"
        },
        {
            source: {
                id: "bbc-news",
                name: "BBC News"
            },
            author: null,
            title: "Ashes to go ahead 'subject to conditions', says ECB",
            description: "England men's Ashes series in Australia this winter will go ahead (subject to several critical conditions), says the England and Wales Cricket Board.",
            url: "https://www.bbc.co.uk/sport/cricket/58788750",
            urlToImage: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/158E1/production/_120898288_root_paine_ashes.jpg",
            publishedAt: "2021-10-08T16:55:51Z",
            content: "England, led by Joe Root (left), lost 4-0 on their most recent tour of Australia in 2017-18 England men's Ashes series in Australia this winter will go ahead (subject to several critical conditions)… [+2152 chars]"
        },
        {
            source: {
                id: "reuters",
                name: "Reuters"
            },
            author: null,
            title: "MCC changes 'batsman' to 'batter' in Laws of Cricket - Reuters",
            description: "The term 'batsman' has been amended to the gender-neutral term 'batter' in the Laws of Cricket to stress the importance of women's cricket, the Marylebone Cricket Club said on Wednesday.",
            url: "https://www.reuters.com/lifestyle/sports/mcc-changes-batsman-batter-laws-cricket-2021-09-22/",
            urlToImage: "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=53",
            publishedAt: "2021-09-22T11:15:00Z",
            content: "Sept 22 (Reuters) - The term 'batsman' has been amended to the gender-neutral term 'batter' in the Laws of Cricket to stress the importance of women's cricket, the Marylebone Cricket Club said on Wed… [+1329 chars]"
        },
        {
            source: {
                id: "bbc-news",
                name: "BBC News"
            },
            author: null,
            title: "England tour of West Indies confirmed for next January and March",
            description: "England will face West Indies in five Twenty20s and three Tests in the Caribbean in January and March next year.",
            url: "https://www.bbc.co.uk/sport/cricket/58958300",
            urlToImage: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/7334/production/_121129492_gettyimages-1257926961.jpg",
            publishedAt: "2021-10-18T16:18:10Z",
            content: "England won the last Test series against West Indies to claim the final Wisden Trophy England will face West Indies in five Twenty20s and three Tests in the Caribbean in January and March next year.… [+1854 chars]"
        },
        {
            source: {
                id: "reuters",
                name: "Reuters"
            },
            author: null,
            title: "Afghanistan seek members' support ahead of crucial ICC meeting - Reuters",
            description: "The Afghanistan Cricket Board (ACB) has requested the support of other full members of the International Cricket Council ahead of next month's crucial meeting where the game's future in the South Asian country is likely to be decided.",
            url: "https://www.reuters.com/lifestyle/sports/afghanistan-seek-members-support-ahead-crucial-icc-meeting-2021-10-18/",
            urlToImage: "https://www.reuters.com/resizer/ZGqbQ7O1IALltpj2Giu5XRqXpbs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RQ3B52TK6VP2FPSPRS2O5LOJYI.jpg",
            publishedAt: "2021-10-18T06:23:00Z",
            content: "The International Cricket Council (ICC) logo at the ICC headquarters in Dubai, October 31, 2010. REUTERS/Nikhil MonteiroNEW DELHI, Oct 18 (Reuters) - The Afghanistan Cricket Board (ACB) has requested… [+2310 chars]"
        },
        {
            source: {
                id: null,
                name: "Gizmodo.com"
            },
            author: "Shoshana Wodinsky",
            title: "Leaked U.S. Docs Say Crickets, Not Weapons, Likely Cause of Mysterious 'Havana Syndrome'",
            description: "If you’re familiar at all with so-called Havana syndrome—the mysterious swath of neural disorders affecting a growing number of U.S. diplomats working abroad—you’re probably familiar with some of the wild speculation surrounding the potential source of the il…",
            url: "https://gizmodo.com/leaked-u-s-docs-say-crickets-not-weapons-likely-caus-1847777706",
            urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/08dff92522200869a0c3b677ab472e88.jpg",
            publishedAt: "2021-09-30T21:20:00Z",
            content: "If youre familiar at all with so-called Havana syndromethe mysterious swath of neural disorders affecting a growing number of U.S. diplomats working abroadyoure probably familiar with some of the wil… [+2603 chars]"
        }
    ]
    constructor() {
        super()
        console.log("This is  constructor from News Component")
        this.state = {
            articles: this.articles,
            loading: false,
        }

    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsLAngoore - Top Headlines</h2>
                <div className="row md-3">
                    {this.state.articles.map((element) => {

                        return <div className="col md-3" key={element.url}>
                            <Newsitem  title={element.title.slice(0,55)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}

                </div>

            </div>
        )
    }
}

export default news

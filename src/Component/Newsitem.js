import React, { Component } from 'react'

export class Newsitems extends Component {


    render() {
        let {title, description, imageUrl, newsUrl}  = this.props
        return (
            <div>
                <div className="card my-3 container" style={{width: '18rem'}}>
  <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2021/10/stocks_sensex_nifty_stockmarkets-2-770x433.jpg":imageUrl} className="card-img-top" alt="Hope" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-sm btn-dark">Read More About it</a>
  </div>
</div>
            </div>
        )
    }
} 

export default Newsitems

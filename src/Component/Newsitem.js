import React, { Component } from "react";
import rescue from "../image/rescue.png";

export class Newsitems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card my-3 container" style={{ width: "18rem" }}>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '80%', zIndex: '0.5' }}>
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? rescue
                : imageUrl
            }
            className="card-img-top"
            alt="Hope"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                <strong> By</strong> {!author ? "Unknown" : author}{" "}
                <strong> On </strong> {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm btn-dark"
            >
              Read More About it
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;

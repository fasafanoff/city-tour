import React, { Component } from 'react';
import "./Tour.scss";
class Tour extends Component {
  state = {
    showInfo:false
  }
  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  }

    render() {
        return (
          <article className="tour">
            <div className="img-container">
              <img src={this.props.tour.img} alt={this.props.tour.name} />
              <span className="close-btn" onClick={()=>this.props.onRemoveTour(this.props.tour.id)}>
                <i className="fas fa-window-close"></i>
              </span>
            </div>
            <div className="tour-info">
              <h3>{this.props.tour.city}</h3>
              <h4>{this.props.tour.name}</h4>
              <h5>
                info{" "}
                <span onClick={this.handleInfo}>
                  <i className="fas fa-caret-square-down"></i> 
                </span>
              </h5>
              {this.state.showInfo && <p>{this.props.tour.info}</p>}
            </div>
          </article>
        );
    }
}

export default Tour;

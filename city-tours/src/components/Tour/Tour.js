import React, { Component } from 'react';
import './Tour.scss';


export default class Tour extends Component {
  render() {
    return (
      <article className="tour" >
        <div className="img-container" >
            <img src="https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <span className="close-btn" >
                <i className="fas fa-times-circle" ></i> 
            </span>
        </div>
        <div className="tour-info" >
            <h3>City Tour</h3>
            <h4>It very good</h4>
            <h5>info 
                <span>
                    <i className="fas fa-caret-square-down" ></i>
                </span>
            </h5>
            <p>
                Tam Dao, Vinh Phuc canh vat nen tho chu tinh!
            </p>
        </div>
      </article>
    )
  }
}

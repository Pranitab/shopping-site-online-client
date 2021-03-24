import React from 'react';
import './rating.css'

const rating=(props)=>{
    //console.log('rating===>',props.ratingStar)
    return(
        <React.Fragment>
            <i className={props.ratingStar >= 1 ? "fa fa-star" : props.ratingStar === 0.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i>
            <i className={props.ratingStar >= 2 ? "fa fa-star" : props.ratingStar === 1.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i>
            <i className={props.ratingStar >= 3 ? "fa fa-star" : props.ratingStar === 2.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i>
            <i className={props.ratingStar >= 4 ? "fa fa-star" : props.ratingStar === 3.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i>
            <i className={props.ratingStar >= 5 ? "fa fa-star" : props.ratingStar === 4.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i>
        </React.Fragment>
    )
}

export default rating;
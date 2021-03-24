import React from 'react';
import './ProductTileComp.css';
import {Link} from 'react-router-dom';
import Rating from '../../RatingComp/rating';

const ProductTileComp =(props)=>{
    let{id, img,name,price,rating,numReviews} = props.prodData;
    return (
        <Link style={{textDecoration:'none'}} to={`/${id}`}>
            <div className='ProdTile'>
                <img src={img} alt='not found'></img>
                <div style={{fontWeight:'bold'}}>{name}</div>
                <Rating ratingStar={rating}/><span className='reviewTxt'>({numReviews} reviews)</span>
                <div>{price + '$'}</div>
            </div>
        </Link>
    )
}


export default ProductTileComp;
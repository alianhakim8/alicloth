import React from 'react';

const Rating = (props) => {
    const { rating, count_review } = props;
    return (

        <div class="rating">
            <span>
                <i className={rating >= 1 ? "fa fa-star text-warning" : rating >= 0.5 ? 'far fa-star' : 'far fa-star'}></i>
                <i className={rating >= 2 ? "fa fa-star text-warning" : rating >= 1.5 ? 'far fa-star' : 'far fa-star'}></i>
                <i className={rating >= 3 ? "fa fa-star text-warning" : rating >= 2.5 ? 'far fa-star' : 'far fa-star'}></i>
                <i className={rating >= 4 ? "fa fa-star text-warning" : rating >= 3.5 ? 'far fa-star' : 'far fa-star'}></i>
                <i className={rating >= 5 ? "fa fa-star text-warning" : rating >= 4.5 ? 'far fa-star' : 'far fa-star'}></i>
            </span>
            <span> {`${count_review} Review`}</span>
        </div>
    );
};

export default Rating;
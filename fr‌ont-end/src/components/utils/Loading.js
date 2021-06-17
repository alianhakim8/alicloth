import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <>
            <div className="container text-center mt-5 mb-5 pt-5 pb-5">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );
};


export default Loading;
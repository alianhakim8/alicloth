import React from 'react';

const ErrorView = (props) => {
    const { error } = props;
    return (
        <div className="container mt-5 mb-5 pt-5 pb-5">
            <div className="row">
                <div className="col text-center">
                    <img src="https://isometric.online/wp-content/uploads/2020/04/error_404_svg.svg" className="img-fluid mb-3" width="300" />
                    <h4 className="fw-bold text-muted">{error}</h4>
                </div>
            </div>
        </div>
    );
};

export default ErrorView;
import React from 'react';

const SingleCase = props => {
    return (
        <div>
            <div>
                <p className="card-header">
                    <span>
                        Username
                    </span>{' '}
                    thought on createAt
                </p>
                <div className="card-body">
                    <p>Case text</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCase;
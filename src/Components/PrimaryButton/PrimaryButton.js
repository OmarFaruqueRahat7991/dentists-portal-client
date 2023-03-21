import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-cyan-300 to-blue-700">
            {children}
          </button>
    );
};

export default PrimaryButton;
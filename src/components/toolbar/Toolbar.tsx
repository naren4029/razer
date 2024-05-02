import React from 'react';
import { toolbarType } from './toolbarTypes';

const Toolbar = ({ children }: toolbarType) => {
    return (
        <div className="toolbar flex">
            {children}
        </div>
    );
};

export default Toolbar;

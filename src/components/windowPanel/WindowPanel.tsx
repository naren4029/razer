import React from 'react';
import { WindowPanelType } from './windowPanelTypes';

const WindowPanel = ({ title }: WindowPanelType) => {
    return (
        <div className="thx-window">
            <div className="sub-title flex">
                <h1 id="eqTitle" className="eq-title">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default WindowPanel;
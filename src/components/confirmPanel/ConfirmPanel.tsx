import React from 'react';
import { ConfirmPanelType } from './confirmPanelTypes';

const ConfirmPanel = ({ title = "delete eq", confirmButtonLabel = "delete", children, classes, onConfirm }: ConfirmPanelType) => {
    return (
        <div id="profileDelCfm" style={{ top: "15px" }} className={`profile-del alert flex ${classes}`}>
            <div className="title">{title}</div>
            <div className="body-text t-center" id="delName">
                {children}
            </div>
            <div className="thx-btn" id="cfmDelete" onClick={onConfirm}>
                {confirmButtonLabel}
            </div>
        </div>
    );
};

export default ConfirmPanel;

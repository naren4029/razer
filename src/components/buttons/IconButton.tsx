import React from 'react';
import { ToolbarButtonType } from '../../constants/toolbar/toolbarButtonTypes';

const IconButton = ({ name, onClicked, hidden, disable }: ToolbarButtonType) => {
    const isVisible = hidden ? '' : 'show';
    const isDisabled = disable ? 'disabled' : '';
    return (
        <div className={`icon ${name.toLowerCase()} ${isVisible} ${isDisabled}`}
            id={`profile${name}`}
            onClick={() => !isDisabled && onClicked ? onClicked(name) : null} />
    );
};

export default React.memo(IconButton);

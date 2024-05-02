import React, { useEffect } from 'react';
import { ProfileListType } from './profileListTypes';
import { scrollToBottom } from '../../utils/profileListUtil';

const ProfileList = ({ children }: ProfileListType) => {
    useEffect(() => {
        scrollToBottom("profileList");
    }, []);
    return (
        <div id="profileList" className="scrollable">
            {children}
        </div>
    );
};

export default React.memo(ProfileList);
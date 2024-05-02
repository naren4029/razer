import React from 'react';
import { DrawerType } from './drawerTypes';

const Drawer = ({ title, children }: DrawerType) => {
    return (
        <div className="thx-drawer flex">
            <div className="main-title">
                {title}
            </div>
            <div id="profileWrapper" className="drawer-select flex">
                {children}
            </div>
        </div>
    );
};

export default Drawer;
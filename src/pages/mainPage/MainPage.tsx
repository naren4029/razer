import React, { useEffect } from 'react';
import Drawer from '../../components/drawer/Drawer';
import WindowPanel from '../../components/windowPanel/WindowPanel';
import ProfileList from '../../components/profileList/ProfileList';
import Toolbar from '../../components/toolbar/Toolbar';

import useProfileList from '../../hooks/profileList/useProflieListHook';
import useToolbarButtonRender from '../../hooks/toolbar/useToolbarButtonRenderHook';
import { DRAWER_TITLE } from '../../constants/profileList/profileListConstants';
import ConfirmPanel from '../../components/confirmPanel/ConfirmPanel';
import { CONFIRM_DELETE } from '../../constants/toolbar/toolbarButtonConstants';

const MainPage = () => {

    const { selectedProfile, profileList, renderProfileList, deleteProfile } = useProfileList();
    const { showConfirmBox, renderToolbarButtons } = useToolbarButtonRender();

    return (
        <div className="thx-wrapper flex">
            <Drawer title={DRAWER_TITLE}>
                <ProfileList>
                    {renderProfileList(profileList)}
                </ProfileList>
                <Toolbar>
                    {renderToolbarButtons()}
                    <ConfirmPanel title={CONFIRM_DELETE.headerText}
                        confirmButtonLabel={CONFIRM_DELETE.buttonLabel}
                        onConfirm={() => { deleteProfile() }}
                        classes={(showConfirmBox) ? "show" : ""}>
                        {selectedProfile?.name}
                    </ConfirmPanel>
                </Toolbar>
            </Drawer>
            <WindowPanel title={selectedProfile?.name} />
        </div>
    );
};

export default MainPage;

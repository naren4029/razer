import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ProfileItem from "../../components/profileList/ProfileItem";
import { updateEditState, updateProfileListState, updateRecordDeleteState, updateSelectedProfileState } from "../../app/slice/profileSlice";
import type { RootState } from "../../app/store";
import { ProfileType } from "../../constants/profileList/profileListTypes";
import { updateDeleteConfirmState, updateToolbarButtonState } from "../../app/slice/toolbarButtonSlice";
import { getProfileList } from "../../utils/profileListUtil";
import { ToolbarButtonType } from "../../constants/toolbar/toolbarButtonTypes";
import { ToolbarButtonName } from "../../constants/toolbar/toolbarButtonConstants";
import { getUpdatedProfile } from "../../utils/toolbarButtonUtil";

const useAdaptor = () => {
    const dispatch = useDispatch();

    const selectedProfile = useSelector(
        (state: RootState) => state.profile.selectedProfile
    );

    const profileList = useSelector(
        (state: RootState) => state.profile.profileList
    );

    const toolbarButtons = useSelector(
        (state: RootState) => state.toolbar.buttonList
    );

    const showConfirmBox = useSelector(
        (state: RootState) => state.toolbar.showConfirmBox
    );

    const onSelectHandler = useCallback((item: ProfileType) => {
        dispatch(updateSelectedProfileState(item));
        dispatch(updateToolbarButtonState(item));
        dispatch(updateDeleteConfirmState(false));
    }, []);

    const onEditCompleteHandler = () => {
        dispatch(updateEditState(false));
    };

    const deleteProfile = () => {
        const activeProfileIndex = profileList.findIndex((item) => item.active);
        dispatch(updateRecordDeleteState(selectedProfile.id));
        dispatch(updateDeleteConfirmState(false));
        onSelectHandler(profileList[activeProfileIndex - 1]);
    };

    const dataChangeHandler = (item: ProfileType, value: string) => (value) ? dispatch(updateSelectedProfileState({ ...item, name: value })) : null;

    const renderProfileList = (profile: ProfileType[]) => {
        return profile.map((item, index) => <ProfileItem key={item.id} id={item.id} label={item.name}
            classes={(item.noEdit ? `no-edit ${item.name.toLowerCase()}` : 'custom') + (item.active ? ' active' : '')}
            onSelected={() => { onSelectHandler(item) }} edit={item.editEnabled}
            onEditComplete={() => onEditCompleteHandler()}
            onDataChange={(value: string) => { dataChangeHandler(item, value) }}
        />
        );
    };

    useEffect(() => {
        const activeProfile = getProfileList().find((profile: ProfileType) => profile.active);

        if (activeProfile) {
            dispatch(updateToolbarButtonState(activeProfile));
        }
    }, []);

    const onClickHandler = useCallback((buttonProps: ToolbarButtonType) => {
        switch (buttonProps.name) {
            case ToolbarButtonName.Add:
                const updatedProfile = getUpdatedProfile();
                dispatch(updateProfileListState(updatedProfile));
                dispatch(updateToolbarButtonState(updatedProfile[updatedProfile.length - 1]));
                break;
            case ToolbarButtonName.Edit:
                dispatch(updateEditState(true));
                break;
            case ToolbarButtonName.Delete:
                dispatch(updateDeleteConfirmState(true));
                break;
            default:
                break;
        }
    }, []);



    return { selectedProfile, profileList, toolbarButtons, showConfirmBox, renderProfileList, deleteProfile, onClickHandler };
};

export default useAdaptor;
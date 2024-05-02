import React, { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ProfileItem from "../../components/profileList/ProfileItem";
import { updateEditState, updateRecordDeleteState, updateSelectedProfileState } from "../../app/slice/profileSlice";
import type { RootState } from "../../app/store";
import { ProfileType } from "../../constants/profileList/profileListTypes";
import { updateDeleteConfirmState, updateToolbarButtonState } from "../../app/slice/toolbarButtonSlice";

const useProfileList = () => {
    const dispatch = useDispatch();

    const selectedProfile = useSelector(
        (state: RootState) => state.profile.selectedProfile
    );

    const profileList = useSelector(
        (state: RootState) => state.profile.profileList
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

    const dataChangeHandler = (item: ProfileType, value: string) => (value && value.trim()) ? dispatch(updateSelectedProfileState({ ...item, name: value.trim() })) : null;

    const renderProfileList = (profile: ProfileType[]) => {
        return profile.map((item, index) => <ProfileItem key={item.id} id={item.id} label={item.name}
            classes={(item.noEdit ? `no-edit ${item.name.toLowerCase()}` : 'custom') + (item.active ? ' active' : '')}
            onSelected={() => { onSelectHandler(item) }} edit={item.editEnabled}
            onEditComplete={() => onEditCompleteHandler()}
            onDataChange={(value: string) => { dataChangeHandler(item, value) }}
        />
        );
    };

    return { selectedProfile, profileList, renderProfileList, deleteProfile };
};

export default useProfileList;
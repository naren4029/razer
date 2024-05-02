import React, { useCallback, useEffect } from 'react';
import IconButton from '../../components/buttons/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { getUpdatedProfile } from '../../utils/toolbarButtonUtil';
import { updateEditState, updateProfileListState, updateSelectedProfileState } from '../../app/slice/profileSlice';
import type { RootState } from '../../app/store';
import { ToolbarButtonType } from '../../constants/toolbar/toolbarButtonTypes';
import { ToolbarButtonName } from '../../constants/toolbar/toolbarButtonConstants';
import { updateDeleteConfirmState, updateToolbarButtonState } from '../../app/slice/toolbarButtonSlice';
import { getActiveProfile, getActiveProfileIndex, getProfileList } from '../../utils/profileListUtil';
import debouncedPostData from '../../services/services';

const useToolbarButtonRender = () => {
    const dispatch = useDispatch();

    const toolbarButtons = useSelector(
        (state: RootState) => state.toolbar.buttonList
    );

    const showConfirmBox = useSelector(
        (state: RootState) => state.toolbar.showConfirmBox
    );

    useEffect(() => {
        const activeProfile = getActiveProfile();
        if (activeProfile) {
            dispatch(updateToolbarButtonState(activeProfile));
        }
    }, []);

    const onClickHandler = useCallback((buttonProps: ToolbarButtonType) => {
        const profileList = [...getProfileList()];
        switch (buttonProps.name) {
            case ToolbarButtonName.Add:
                const updatedProfile = getUpdatedProfile();
                dispatch(updateProfileListState(updatedProfile));
                dispatch(updateToolbarButtonState(updatedProfile[updatedProfile.length - 1]));
                debouncedPostData(getProfileList(), dispatch)
                break;
            case ToolbarButtonName.Edit:
                dispatch(updateEditState(true));
                debouncedPostData(getProfileList(), dispatch)
                break;
            case ToolbarButtonName.Delete:
                dispatch(updateDeleteConfirmState(true));
                debouncedPostData(getProfileList(), dispatch)
                break;
            case ToolbarButtonName.Down:
            case ToolbarButtonName.Up:
                const index = buttonProps.name === ToolbarButtonName.Down ? (getActiveProfileIndex() + 1) : (getActiveProfileIndex() - 1);
                const activeProfile = { ...profileList[index], active: true };
                dispatch(updateSelectedProfileState(activeProfile));
                dispatch(updateToolbarButtonState(activeProfile));
                break;
            default:
                break;
        }
    }, []);


    const renderToolbarButtons = () => {
        return toolbarButtons.map((buttonProps, index) => {
            return <IconButton key={index} {...buttonProps} onClicked={() => onClickHandler(buttonProps)} />
        });
    };

    return { showConfirmBox, toolbarButtons, onClickHandler, renderToolbarButtons };
};

export default useToolbarButtonRender;
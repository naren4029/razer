import React, { useRef, useEffect } from 'react';
import { ProfileItemType } from './profileItemTypes';

const ProfileItem = ({ id, label, classes, onSelected, edit = false, onEditComplete, onDataChange }: ProfileItemType) => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (edit) inputRef?.current?.focus();
    }, [edit]);

    const getProfileItem = () => {
        if (edit) {

            return (
                <div id={id} key={id} className={`profile-item ${classes}`}>
                    <input
                        id="profileRename"
                        ref={inputRef}
                        className="profile-item show"
                        style={{ marginLeft: "-6px", marginTop: "-5px" }}
                        placeholder="Enter Profile Name"
                        max="25"
                        autoComplete="off"
                        defaultValue={label}
                        onChange={(e) => onDataChange?.(e.target.value)}
                        onFocus={(e) => e.target.select()}
                        onBlur={() => onEditComplete?.()}
                    />
                </div>
            );
        }
        return (
            <div id={id} key={id} className={`profile-item ${classes}`} onClick={() => onSelected(label)}>
                {label}
            </div>
        );
    };

    return getProfileItem();
};

export default React.memo(ProfileItem);
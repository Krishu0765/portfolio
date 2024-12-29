import React from "react";
import avatar from "../../../assets/images/baseImages/default_avatar.svg";
import user from "../../../utils/data/user.config";
const AboutMeDesktop = () => {
    return (
		<div className="right-card uk-card uk-text-center font-color-white">
    <div className="uk-width-auto">
        <img
            className="uk-border-circle profile-image"
            width="120"
            height="120"
            src={
                user.userImage !== undefined &&
                user.userImage !== null &&
                user.userImage !== ""
                    ? user.userImage
                    : avatar
            }
            alt="user"
        />
        <p className="uk-text-lead uk-margin-remove-bottom font-color-white">
            Hey, I'm {user.firstName} {user.lastName}
        </p>
        {user.aboutMe.intro && (
            <p className="uk-margin-remove-top font-color-white">
                {user.aboutMe.intro}
            </p>
        )}
    </div>
    {user.aboutMe.description && (
        <div className="description uk-margin-remove">
            {user.aboutMe.description}
        </div>
    )}
    {user.aboutMe.outro && (
        <div className="uk-margin-medium-top">
            {user.aboutMe.outro}
        </div>
    )}
</div>

	);
}

export default AboutMeDesktop
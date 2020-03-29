import React, {useCallback, useState} from "react";
import './FollowingButton.css';

const FollowButton =  ({ following, onClick }) => {
    const [isOver, setIsOver] = useState(false);

    const onMouseEnterOutHandler = useCallback(() => {
        setIsOver(!isOver);
    }, [isOver, setIsOver]);

    const title = following ? (isOver ? "Unfollow" : "Following") : "Follow";
    const classes = "btn btn-light " + (following ? "btn-unfollow" : "btn-follow");

    return (
        <button
            type="button"
            className={classes}
            onMouseEnter={onMouseEnterOutHandler}
            onMouseLeave={onMouseEnterOutHandler}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default FollowButton;
import React, {useCallback, useMemo, useState} from "react";
import './FollowingButton.css';

const FollowButton =  ({following, onClick}) => {
    const [isOver, setIsOver] = useState(false);

    const onMouseEnterOutHandler = useCallback(() => {
        setIsOver(!isOver);
    }, [isOver, setIsOver]);

    const title = useMemo(() => {
        return following ? (isOver ? "Unfollow" : "Following") : "Follow";
    }, [isOver, following]);


    let classes = "btn btn-light " + (following ? "btn-unfollow" : "btn-follow");
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
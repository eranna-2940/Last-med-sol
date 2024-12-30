import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const LabagentProtectedRoute = (props) => {
    // console.log(props.children)
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('labagent-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/lab');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLoggedIn]);

    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default LabagentProtectedRoute;
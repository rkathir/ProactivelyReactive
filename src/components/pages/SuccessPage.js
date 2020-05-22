import React from 'react';
import { useHistory } from "react-router-dom";

export const SuccessPage = () => {
    const history = useHistory();
    
    const clickHome = () => {
        history.push('/');
    }

    return (
        <div>
            <br />
            <h1>
                Success!!
            </h1>
            <br />
            <button type="button" onClick={clickHome}>Home Page</button>
        </div>
    );
}
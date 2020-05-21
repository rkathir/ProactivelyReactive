import React from 'react';

import './SideBar.css';

export const SideBar = (props) => {
    return (
        <aside id="sidebar" className={ props.className }>
            { props.children }
        </aside>
    );
}
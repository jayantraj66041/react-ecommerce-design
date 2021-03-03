import React from 'react';
const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">{props.logo}</span>
            </div>
        </nav>
    );
}
export default Navbar;
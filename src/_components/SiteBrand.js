import React from 'react';
import './SiteBrand.css';
import Logo from '../_assets/NU-logo-500.svg'

function SiteBrand() {
    return (
        <div className="site-brand">
            <img src={Logo} alt=""/>
            <h1>Husker Football</h1>
        </div>
    )
}

export default SiteBrand;

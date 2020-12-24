import React from 'react'
import './page.css';
import { Link } from "react-router-dom";

function Y2019() {
    return (
        <div className="main">
            <div className="y2019__container">
                <span>2019년의 나</span>
                <Link to="/">Main</Link>
            </div>
        </div>
    )
}

export default Y2019;

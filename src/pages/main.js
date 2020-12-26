import React from 'react'
import './page.css';
import { Link } from "react-router-dom";
import Card from '../components/card';
import Header from '../components/header';

function main() {
    return (
        <div className="main">
            <div className="main__container">
                <Header />
            </div>
        </div>
    )
}

export default main;

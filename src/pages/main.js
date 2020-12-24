import React from 'react'
import './page.css';
import { Link } from "react-router-dom";
import Card from '../components/card';

function main() {
    return (
        <div className="main">
            <div className="main__container">
                <span className="main__title">제 이름은 <span className="main__name">정현수</span> 입니다.</span>
                <Link to="/2019">2019</Link>
                <Card></Card>
            </div>
        </div>
    )
}

export default main;

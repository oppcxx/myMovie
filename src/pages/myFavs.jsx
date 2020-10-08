import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { Row, Col, Card, Button } from 'antd';
import Detail from './detail';

function MyFavs(props) {
    console.log(props);
    const { Meta } = Card;
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        
    },[])
    return (
        <div>
            <h1>我是收藏页面</h1>

        </div>
    )
}

export default MyFavs

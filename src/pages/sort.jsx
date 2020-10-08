import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Card, Button } from 'antd';
import '../App.css';
import { getMovieCategoryApi } from "../services/movies";

function Sort() {
  const { Meta } = Card;
  const [category,setCategory] = useState([]);
  useEffect(() => {
    getMovieCategoryApi().then(res=>{
      console.log(res);
      setCategory(res)
      
    })
  }, []);
  return (
    <div>
      <h1>目前所在位置分类页</h1>
      <div className="movieStyle">
        {category.map((item) => {
          return (
              <Card
                key={item.id}
                hoverable
                style={{ width: 180 }}
                onClick={()=>{
                  console.log(item.id);
                }}
              >
                <Meta title={item.name} description={item.desc} />
              </Card>
          )
        })}

      </div>
    </div >
  );
}

export default Sort;

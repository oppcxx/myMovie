import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { Row, Col, Card, Button } from 'antd';
import Detail from './detail';
import { getMoviesListApi } from "../services/movies";
import '../App.css';

function Movies(props) {
  console.log(props);
  const { Meta } = Card;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [id, setId] = useState(1);
  const [isShow, setIsShow] = useState(false)
  const cate = ['电影', '动漫', '电视剧', '综艺', '纪录片'];
  useEffect(() => {
    getMoviesListApi({ category: id,page,per:96 }).then(res => {
      console.log(res);
      setMovies(res.list)
    })
  }, [id,page]);
  const loadMore = () => {
    setPage(page + 1);
  }
  return (
    <div>
      <div className="container">
        {/* 二级导航 */}
        <div className="nav">

          <Row>
            {cate.map((item, index) => {
              return (
                <Col key={index} xs={{ span: 3, offset: 1 }} onClick={() => { setId(index + 1); setIsShow(true); }}>{item}</Col>
              )
            })}
            {/* <Col className={isShow ? 'active' : ''} xs={{ span: 3, offset: 1 }} onClick={() => { setId(1); setIsShow(true) }}>电影</Col>
            <Col xs={{ span: 4, offset: 1 }} onClick={() => { setId(2); }}>动漫</Col>
            <Col xs={{ span: 4, offset: 1 }} onClick={() => { setId(3); }}>电视剧</Col>
            <Col xs={{ span: 4, offset: 1 }} onClick={() => { setId(4); }}>综艺</Col>
            <Col xs={{ span: 4, offset: 1 }} onClick={() => { setId(5); }}>纪录片</Col> */}
          </Row>
        </div>
        {/* 影片内容 */}

        <div className="movieStyle">
          {movies.map((item) => {
            return (
              <NavLink
                key={item.id}
                to={{
                  pathname: '/detail',
                  search: '?id=' + item.id,
                  state: { ...item }
                }}>
                <Card
                  key={item.id}
                  hoverable
                  style={{ width: 180 }}
                  cover={<img alt={item.name} src={item.coverImage} />}
                >
                  <Meta title={item.name} description={item.desc} />
                </Card>
              </NavLink>
            )
          })}
        </div>
        {/* <Button type="primary" onClick={loadMore}>下一页</Button> */}
      </div>
    </div>
  );
}

export default Movies;

import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Row, Col,Card,Button } from 'antd';
import Detail from './detail'
import '../App.css';

function Movies() {
  const { Meta } = Card;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [chanal, setChanal] = useState(1);
  const [isShow,setIsShow] = useState(false)
  useEffect(() => {
    fetch(
      `https://pcw-api.iqiyi.com/search/recommend/list?channel_id=${chanal}&data_type=1&mode=11&page_id=${page}&ret_num=48`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.list);
        setMovies(res.data.list);
      });
  }, [page, chanal]);

  return (
    <div>
      <div className="container">
        {/* 二级导航 */}
        <div className="nav">

          <Row>
            <Col className={isShow?'active':''} xs={{ span: 3, offset: 1 }} onClick={() => { setChanal(1);setIsShow(true)}}>电影</Col>
            <Col  xs={{ span: 3, offset: 1 }} onClick={() => { setChanal(2); }}>电视剧</Col>
            <Col  xs={{ span: 3, offset: 1 }} onClick={() => { setChanal(3);  }}>纪录片</Col>
            <Col  xs={{ span: 3, offset: 1 }} onClick={() => { setChanal(4);  }}>科幻</Col>
            <Col xs={{ span: 3, offset: 1 }} onClick={() => { setChanal(5);  }}>舞台</Col>
            <Col xs={{ span: 3, offset: 1 }} onClick={() => { setChanal(6);  }}>真人秀</Col>
          </Row>
        </div>
        {/* 影片内容 */}

        <div className="movieStyle">
          {movies.map((item) => {
            return (
              <Link
                key={item.albumId}
                to={{
                  pathname: '/detail',
                  search: '?id=' + item.albumId,
                  state: { ...item }
                }}>
                <Card
                  key={item.albumId}
                  hoverable
                  style={{ width: 180 }}
                  cover={<img alt={item.name} src={item.imageUrl} />}
                >
                  <Meta title={item.albumName} description={item.description} />
                </Card>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default Movies;

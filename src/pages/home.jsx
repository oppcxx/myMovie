import React, { useEffect, useState } from "react";
import { Card, Carousel, Button } from 'antd';
import '../App.css';
import { Link } from "react-router-dom";

function Home(props) {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const { Meta } = Card;
  const [page, setPage] = useState(1);
  const [moveis, setMovies] = useState([]);
  const loadMore = () => {
    setPage(page + 1)

  }
  useEffect(() => {
    fetch(`https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=${page}&ret_num=48`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.list);
        setMovies([...moveis, ...res.data.list]);
      })
  }, [page])
  return (
    <div>
      {/* 轮播图 */}
      <Carousel effect="fade" autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      {/* 最新内容 */}
      <h3 style={{ textAlign: 'left', textIndent: '10px' }}>最新内容</h3>
      <div className="movieStyle">
        {moveis.map((item) => {
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
      <Button type="primary" onClick={loadMore}>加载更多</Button>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Card, Button } from 'antd';
import '../App.css';

function Sort() {
  const { Meta } = Card;
  const [channal, setChannal] = useState(1);
  const [movies, setMovies] = useState(
    [{
      channel_id: 1,
      sort_name: '电影'
    }, {
      channel_id: 2,
      sort_name: '电视剧'
    }, {
      channel_id: 3,
      sort_name: '纪录片'
    }, {
      channel_id: 4,
      sort_name: '科幻'
    }, {
      channel_id: 5,
      sort_name: '舞台/影视音乐'
    }, {
      channel_id: 6,
      sort_name: '真人秀'
    }]
  );
  const [moviess, setMoviess] = useState([])
  const [page, setPage] = useState(1);
  const loadMore = () => {
    setPage(page + 1)

  };
  useEffect(() => {
    fetch(`https://pcw-api.iqiyi.com/search/recommend/list?channel_id=${channal}&data_type=1&mode=11&page_id=${page}&ret_num=48`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.list);
        setMoviess(res.data.list);
      });
  }, [channal, page]);
  return (
    <div>
      <h1>目前所在位置分类页</h1>
      <div className="movieStyle">
        {movies.map((item) => {
          return (
              <Card
                key={item.channel_id}
                hoverable
                style={{ width: 180 }}
                onClick={()=>{
                  setChannal(item.channel_id)
                }}
              >
                <Meta title={item.sort_name} description={item.sort_name} />
              </Card>
          )
        })}

        {moviess.map((item) => {
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
        <Button type="primary" onClick={loadMore}>下一页</Button>
      </div>
    </div >
  );
}

export default Sort;

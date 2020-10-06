import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./detail";

function List() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=${page}&ret_num=48`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.data.list);
      });
  }, [page]);

  return (
    <div>
      <h1>我是列表页</h1>
      <div className="container">
        <ul className="nav">
          {movies.map((item) => (
            <li key={item.albumId}>
              <Link
                to={{
                  pathname: "/list/detail",
                  state: { ...item }, // 可以使用state传递大量的数据
                  search: `?id=${item.albumId}`, // 此处多传递了一个参数，表示url地址变了
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="main">
          {/* 路由嵌套的时候需要把父路由的地址一起写进来 */}
          <Route path="/list/detail" component={Detail} />
        </div>
      </div>
    </div>
  );
}

export default List;

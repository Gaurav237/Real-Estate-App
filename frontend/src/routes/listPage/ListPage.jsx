import React from "react";
import "./listPage.scss";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";

const ListPage = () => {
  const data = listData;
  
  return (
    <div className="list-page">
      <div className="list-container">
        <div className="wrapper">
          <Filter />

          {data.map(item => (
            <Card key={item.id} />
          ))}
          
        </div>
      </div>
      <div className="map-container">
        Map
      </div>
    </div>
  )
}

export default ListPage

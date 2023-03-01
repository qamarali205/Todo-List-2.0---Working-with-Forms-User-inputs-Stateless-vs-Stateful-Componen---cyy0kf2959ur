import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  const date = new Date();
  const nlist = [];

  return (
    <div id="today-list">{props.list.map((item) => {
      if (item.date.getDate() === date.getDate()) {
        nlist.push(item)
      }})}
      <div>``</div>
      <ListRender list={nlist} />
    </div>
  );
};

export default Today;
import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();
  var last = new Date(date.getTime() + (7 * 24 * 60 * 60 * 1000));
  let nlist=[];
  return (
    <div id="next-list">
      {
        props.list.map((item)=>{
          if(item.date>date && item.date<=last){
            nlist.push(item)
          }
        })
      }<div>``</div>
      <ListRender list={nlist}/>
    </div>
  );
};

export default Next7Days;
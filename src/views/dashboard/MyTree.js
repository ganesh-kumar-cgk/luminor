import React, { useState, useEffect } from "react";
import { Tree } from "react-d3-tree";
import * as d3 from "d3";

const MyTree = () => {
  const [data, setData] = useState(null);
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    d3.json("tree2.json").then(res => {
      setData(res);
      setCurrentData(res.slice(0, 10));
    });
  }, []);

  const handleLoadMore = () => {
    setCurrentData(data.slice(0, currentData.length + 10));
  };

  return (
    data && (
      <div>
        <Tree
          data={currentData}
          translate={{ x: 100, y: 100 }}
          orientation="vertical"
        />
        <button onClick={handleLoadMore}>Load More</button>
      </div>
    )
  );
};

export default MyTree;

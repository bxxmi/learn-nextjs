import React, { useState, useEffect } from "react";

const Launches = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/launches");
      const datas = await response.json();

      setData(datas);
    };

    fetchLaunches();
  }, []);

  if (data === null) {
    return null;
  }

  return (
    <div>
      <ol>
        {data.map((item, index) => {
          <li key={index}>{item.mission_name}</li>;
        })}
      </ol>
    </div>
  );
};

export default Launches;

import React, { useState, useEffect } from "react";

const Launches = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/launches");
      const data = await response.json();

      setData(data);
    };

    fetchLaunches();
  }, []);

  if (!data) {
    return null;
  }

  return <div></div>;
};

export default Launches;

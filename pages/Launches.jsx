import React from "react";

export default function Launches({ datas }) {
  if (datas === null) {
    return null;
  }

  return (
    <div>
      <ol>
        {datas.map((item, index) => {
          <li key={index}>{item.mission_name}</li>;
        })}
      </ol>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://api.spacexdata.com/v3/launches");
  const datas = await response.json();

  console.log("getServerSideProps");

  return {
    // page 컴포넌트에 props로 전달될 것
    props: { datas },
  };
}

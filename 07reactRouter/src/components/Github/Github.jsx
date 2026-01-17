import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

  // useLoaderData() is a React Router hook that lets your component read data returned by a route’s loader function. that is loader={gitHubInfoLoader}
  const data = useLoaderData(); // it will give you data using loader in Router

  // fetching api from github
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/vansh123454")
  //     .then((res) => res.json()) // converting into object
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="flex items-center justify-center gap-8 p-8">
      <img src={data.avatar_url} alt="avatar" className="w-32 h-32 rounded-full" />
      <h1 className="text-3xl font-bold">Github followers: {data.followers}</h1>
    </div>
  );
};

export default Github;


// this is optimization api call. Both will give you same result but it is for optimization
export const gitHubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/vansh123454');
  return response.json();
}

import React, { useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=10d214da%20`;

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [querry, setQuerry] = useState("titanic");
  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const resData = await res.json();
      if (resData.Response === "True") {
        setMovie(resData.Search);
       if(resData.Search){
        setIsError({
          show: false,
          msg: '',
        });
       }else{
        setIsError({
          show: true,
          msg: resData.Error,
        });
       }
      } else {
        setIsError({
          show: true,
          msg: resData.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeStamp = setTimeout(()=>{
      getMovie(`${API_URL}&s=${querry}`);
    },500);
    return () =>{
      clearTimeout(timeStamp)
    }
   
  }, [querry]);

  return (
    <AppContext.Provider
      value={{ querry, isLoading, movie, isError, setQuerry }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

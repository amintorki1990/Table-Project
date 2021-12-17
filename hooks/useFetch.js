import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setData(res))
      .catch((e) => {
        setError(e);
        console.log(e)
      }).finally(()=> {
          setLoading(false)
      });
  }, []);

  return [data,loading,error]

}

export default useFetch;

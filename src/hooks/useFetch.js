import {useEffect, useState} from "react";

const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  })

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const response = await fetch(url);
    const data = await response.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    })
  }

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state
  }
}

export default useFetch;
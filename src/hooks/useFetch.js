// import { useEffect, useState } from "react";
// import axios from "axios";

// const useFetch = (url) => {
//   let [data, setData] = useState(null);
//   let [isLoading, setIsLoading] = useState(true);
//   let [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [url]);

//   return { data, isLoading, error };
// };

// export default useFetch;

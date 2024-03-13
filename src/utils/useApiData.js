import { useState, useEffect } from 'react';

function useApiData(apiEndpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
          const response = await fetch(apiEndpoint);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
    }
    fetchData();
  }, [apiEndpoint]);

  return { data, loading, error };
}

export default useApiData;







// import { useState, useEffect } from "react";

// function useApiData(apiEndpoint) {
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       async function fetchData() {
//         try {
//           const response = await fetch(apiEndpoint);
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
          
//           const contentType = response.headers.get('content-type'); 
          
//           if (contentType && contentType.includes('application/json')) {
//             const jsonData = await response.json();
//             setData(jsonData);
//           }else{
//             throw new Error('Response is not valid JSON');
//           }         
//           setLoading(false);
//         } 
//           catch (error) {
//           setError(error);
//           setLoading(false);
//         }
//       }
  
//       fetchData();
//     }, [apiEndpoint]);
  
//     return { data, loading, error };
//   }

// export default useApiData;




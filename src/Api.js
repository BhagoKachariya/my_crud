import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(res => setData(res))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {data ? data.map((item)=>{
//         return(
//             <p key={item.id}>{item.name}</p>
//         )
//       }) : 'Loading...'}
//     </div>
//   );

//   ************************* using Axios *****************************

const [posts, setPosts] = useState([]);

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}, []);

return (
  <ul>
    {posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);
}


export default Api;
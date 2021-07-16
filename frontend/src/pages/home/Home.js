import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/posts`);
                setPosts(res.data.data);
                console.log(res.data)
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);
    const getPosts = () => {
      let list = [];
      let result = [];
      
      posts.map(post => {
          return list.push(
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-primary">{post.title}</strong>
                      <Link to={`/post/${post.slug}`} className="stretched-link">Continue reading</Link>
                      <h3 className="mb-0">{post.content}</h3>
                    
                  </div>
              </div>
          );
      });

      for (let i = 0; i < list.length; i += 2) {
          result.push(
              <div key={i} className='row mb-2'>
                  <div className='col-md-6'>
                      {list[i]}
                  </div>
                  <div className='col-md-6'>
                      {list[i+1] ? list[i+1] : null}
                  </div>
              </div>
          )
      }

      return result;
  };
  return (<div className='container mt-3'>
    {getPosts()}</div>
  );

}

export default Home;
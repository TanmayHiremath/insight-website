import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";

function Post() {
  let { slug } = useParams();
  const [post, setPost] = useState([]);
  function createMarkup() {
    return {__html: post.content};
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/post/${slug}`);
        setPost(res.data.data);
        console.log(res.data)
      }
      catch (err) {

      }
    }

    fetchData();
  }, []);

  return (<div className='container mt-3'>
    <div className='display-1'>{post.title}</div>
    <div dangerouslySetInnerHTML={createMarkup()} />;</div>
  );

}

export default Post;
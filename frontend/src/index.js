import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Post from './pages/post/Post';
import MetaTags from 'react-meta-tags';

ReactDOM.render(
  <div><MetaTags>
    <meta name="description" content="Some description." />
    <meta property="og:title" content="MyApp" />
    <meta id='imagee' property="og:image" content="https://lh4.googleusercontent.com/m_7ztpFVAdWmWp45NtfWtV2C1euwvwB98ntrYMeaXiXmvBKZbQi25S0M9UjqirGqx04U09rKzWF56uIhHf7nLf4CB_cf6M11gxQbl3vMAF4Ufx7hU0Y1A755YxLSWushuQ-ZmdJ0" />
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>Page 1</title>

  </MetaTags>
    <BrowserRouter><Switch>
      <Route path='/home' exact><Home /></Route>
      <Route path='/' exact><App /></Route>
      <Route path='/post/:slug' exact><Post /></Route>
    </Switch></BrowserRouter></div>,
  document.getElementById('root')
);

// let headarr = [<meta charset="utf-8" />,
// <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />,
// <meta name="viewport" content="width=device-width, initial-scale=1" />,
// <meta name="theme-color" content="#000000" />,
// <meta
//   name="description"
//   content="Web site created using create-react-app"
// />,
// <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />,
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />,

// <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />,

// <title>React App</title>]
// for (let i = 0; i < headarr.length; i++) {
//   document.getElementById("head101").appendChild(headarr[i]);  
// }

// var meta = document.createElement('meta');
// meta.httpEquiv = "X-UA-Compatible";
// meta.content = "IE=edge";
// document.getElementsByTagName('head')[0].appendChild(meta);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

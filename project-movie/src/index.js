import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './page/NotFound';
import MovieDetail from './page/MovieDetail';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <NotFound />
  },
  {
    //id값이 계속 바뀌어야하므로 :을 넣어야함
    path : 'movie/:movieId',
    element : <MovieDetail />,
    errorElement : <NotFound />

  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* RouterProvider는 라우터로 만들어진 객체를 구성요소로 전달받아서
    앱을 랜더링 할 수 있게 해주는 라우터 API */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

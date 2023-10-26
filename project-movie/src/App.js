import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import GlobalStyle from './style/GlobalStyle';
import Ex from './component/Ex';
import UseRef from './component/UseRef';
import UseRef2 from './component/UseRef2';
import MainVideo from './component/MainVideo';
import MovieList from './component/MovieList';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from './page/MovieDetail';

/* 
reducer는 객체 형태만 가져올 수 있으며, 함수 형태는 가져올 수 없다
함수 형태의 reducer를 가져올 때에는 thunk를 사용한다
yarn add redux-thunk
*/ 


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <Ex/> */}
      {/* <UseRef /> */}
      {/* <UseRef2 /> */}
      <MainVideo />
      <Provider store={store}>
        <MovieList />
      </Provider>
      <Routes>
        <Route path='/movie/:movieId' element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;

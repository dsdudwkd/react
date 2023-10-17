import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './page/Home';
import Page1 from './page/Page1';
import Page2 from './page/Page2';
import NotFound from './page/NotFound';
import ItemList from './page/ItemList';
import ItemDetail from './page/ItemDetail';

/* 
routes = route를 감싸는 컴포넌트
route = 경로를 직접적으로 연결하는 컴포넌트 path와 element를 사용한다

path는 도메인주소 뒤에 오는 요소
element는 path를 입력하면 연결되는 페이지

Link = a태그와 같은 역할이지만 새로운 페이지를 불러오는게 아니라 필요한 주소의 경로만 변경 => 페이지 이동한 것처럼 보임
*/

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/page1'>Page1</Link>
            </li>
            <li>
              <Link to='/page2'>Page2</Link>
            </li>
            <li>
              <Link to='/itemList'>ItemList</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* <Route path='/' element={<Home />}  errorElement={<NotFound />}/> */}
          <Route path='*' element={<NotFound />}/>
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/itemList' element={<ItemList/>} />
          <Route path='/items/:id' element={<ItemDetail />} />
          {/* 경로에 :이 붙는 경우 :은 동적인 값에 대한 매개변수 */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

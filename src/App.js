import Login from "./Login";
import Signup from "./Signup";

import Header from './Header'; //밑에 3개 같이 사용
import PostList from './PostList';
import PostFilter from './PostFilter';

function App() {
  return ( 
    <div >
      <Header />
      <PostFilter />
      <PostList />
    </div>
  );
}

export default App;

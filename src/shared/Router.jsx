import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyPost from '../pages/MyPost'
import Detail from '../pages/Detail'
import MyPage from '../pages/MyPage'
import Write from '../pages/Write'
import Layout from '../layout/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 검색창 있는 레이아웃 */}
        <Route element={<Layout showSearchBar={true} />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* 검색창 없는 레이아웃 */}
        <Route element={<Layout showSearchBar={false} />}>
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/update/:id" element={<Write />} />
        </Route>

        {/* 별도의 페이지 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

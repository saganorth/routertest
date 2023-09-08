import './App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import {Home, postsLoader} from "./pages/Home";
import {Root} from "./pages/Root";
import Post, { postsWithParamsLoader } from "./pages/Post";
import UserId from "./pages/UserId"
import {Profile} from "./pages/Profile";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"element={<Root/>}>
        <Route index element={ <Home/>} loader={postsLoader}/>
        <Route path="/post/:id" element={<Post/>} loader={postsWithParamsLoader} />
        <Route path="/users/:id" element={<UserId /> } />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

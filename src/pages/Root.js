import { Outlet, Link } from "react-router-dom";
export const Root = () => {
  return (
    <div>
      <h1>Hej forum</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/post/:id">Profile</Link>
      <Outlet />
    </div>
  );
};

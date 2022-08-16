import { Link } from "react-router-dom";
import Banner from "./banner";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className=" navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link m-1" to="/">
            <Banner />
          </Link>
          <Link className="nav-item nav-link m-2" to="/create">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-file-earmark-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z" />
            </svg>
          </Link>
          <div className="navbar-nav ">
            <Link className=" nav-item nav-link m-2" to="/">
              "Writers live twice."
            </Link>

            <Link className="nav-item nav-link m-2" to="/login">
              Login
            </Link>
            <div
              className="nav-item nav-link m-2"
              onClick={() => {
                localStorage.setItem("token", null);
                console.log("logout done!");
                window.location = "/login";
              }}
            >
              Logout
            </div>

            <Link className="nav-item nav-link m-2" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

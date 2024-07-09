import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-light nav-bar">
          <div className="container-fluid">
            {/* <a className="navbar-brand">Navbar</a> */}
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                fwd
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Myntra
                </a>
                <a className="dropdown-item" href="#">
                  fwd
                </a>
                <a className="dropdown-item" href="#">
                  Luxe
                </a>
              </div>
            </div>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;

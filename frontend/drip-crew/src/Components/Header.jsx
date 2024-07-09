const Header = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-light bg-light nav-bar">
          <div class="container-fluid">
            {/* <a class="navbar-brand">Navbar</a> */}
            <div class="dropdown show">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                fwd
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">
                  Myntra
                </a>
                <a class="dropdown-item" href="#">
                  fwd
                </a>
                <a class="dropdown-item" href="#">
                  Luxe
                </a>
              </div>
            </div>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button class="btn btn-outline-success" type="submit">
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

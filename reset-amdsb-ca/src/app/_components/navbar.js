import { Container, Nav, Navbar, Dropdown, Image } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar className="navbar bg-body-tertiary navbar-expand-md">
        <Container>
            <div className="d-inline">
                <a href="/ithelp/" className="d-flex w-100 text-decoration-none text-decoration-none">
                    <div className="d-flex align-items-center">
                    <Image style={{width: '2rem'}} src="/branding/home_button.png"/>
                    <h1 id="header-title"><strong>Information Technology Services</strong></h1>
                    </div>
                </a>
                <div id="theme-toggle" class="nav-item dropdown me-2 flex-shrink-1">
        <button class="btn btn-link nav-link py-2 px-0 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-label="Toggle Theme (dark)">
        <svg class="bi my-1 theme-icon-active">
            <use href="#moon-stars-fill"></use>
            </svg>
            <span class="d-lg-none ms-2" id="bd-theme-text"></span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
            <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                    <svg class="bi me-2 opacity-100"><use href="#sun-fill"></use></svg>
                    Light
                    <svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
                  </button>
            </li>
            <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="true">
                    <svg class="bi me-2 opacity-100"><use href="#moon-stars-fill"></use></svg>
                    Dark
                    <svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
                  </button>
            </li>
            <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                    <svg class="bi me-2 opacity-100"><use href="#circle-half"></use></svg>
                    Auto
                    <svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
                  </button>
            </li>
        </ul>
    </div>
  </div>
            
        </Container>
        </Navbar>
    );
}
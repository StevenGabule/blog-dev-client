import {Link} from "react-router-dom";
import Search from "./Search";
import Menu from "./Menu";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand"><strong>BlogDev</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search />
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Header;

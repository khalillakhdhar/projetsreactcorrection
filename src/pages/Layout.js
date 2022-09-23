import { Outlet, Link } from "react-router-dom";
const Layout = () => {
return (
<>
<nav>
<ul>
<li>
<Link to="/">Produit</Link>
</li>
<li>
<Link to="/parite">Parité</Link>
</li>
<li>
<Link to="/date">Date</Link>
</li>
</ul>
</nav>
<Outlet />
</>
)
};
export default Layout;
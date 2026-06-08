import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="page">
      <h1>Services</h1>

      <div className="service-links">
        <Link to="delivery">
          Delivery
        </Link>

        <Link to="support">
          Support
        </Link>

        <Link to="returns">
          Returns
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Services;
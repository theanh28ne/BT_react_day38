import { NavLink } from "react-router-dom";

const Navigation = () => {
  const links = [
    {
      path: "/",
      title: "1. Sử dụng useState(callback) #1",
    },
    {
      path: "countDown",
      title: "2. Sử dụng useState(callback) #2",
    },
    {
      path: "shoppingCart",
      title: "3. Sử dụng Context API",
    },
  ];

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {link.title}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <nav className="mx-auto max-w-6xl px-4">
      <ul>{renderLinks()}</ul>
    </nav>
  );
};

export default Navigation;

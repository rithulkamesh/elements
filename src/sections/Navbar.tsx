import { FaMusic } from "react-icons/fa";

export const Navbar = () => {
  return (
    // Ticket button in top right corner
    <div className="navbar">
      <Icon />
    </div>
  );
};

const Icon = () => {
  return (
    <div className="nav-logo flex">
      <FaMusic className="text-white" size={27} />
      <div className="text-white text-2xl font-bold ml-2">Crescendo</div>
    </div>
  );
};

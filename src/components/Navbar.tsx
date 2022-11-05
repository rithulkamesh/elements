import { FaTicketAlt, FaMusic } from "react-icons/fa";

const Navbar = () => {
  return (
    // Ticket button in top right corner
    <div className="navbar">
      <Icon />
      <TicketButton />
    </div>
  );
};

const Icon = () => {
  return (
    <div className="nav-logo">
      <FaMusic className="text-white" size={27} />
    </div>
  );
};

const TicketButton = () => {
  return (
    <div className="ticket-button">
      <button className="bg-violet-700 p-2 rounded-lg hover:bg-violet-500 duration-75">
        <FaTicketAlt className="text-white" size={25} />
      </button>
    </div>
  );
};

export default Navbar;

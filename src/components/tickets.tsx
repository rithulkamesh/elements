import React from "react";
import TicketCard from "../sections/TicketCard";

type Props = {};

const Tickets = (props: Props) => {
  return (
    <div
      className="antialiased w-full h-full bg-black text-gray-400 font-inter p-10 pt-1"
      id="tickets"
    >
      <div className="container px-4 mx-auto">
        <div>
          <div id="title" className="text-center my-10">
            <h1 className="font-bold text-4xl text-white">Tickets</h1>
            <p className="text-light text-gray-500 text-xl">
              Grab them while they're still there!!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  justify-evenly gap-10 pt-10">
            <TicketCard title="Standard" price={75} disabled>
              <ul>
                <li>Access to all events</li>
                <li>Complimentary Signed Swag</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
              </ul>
            </TicketCard>
            <TicketCard title="Premium" price={300}>
              <ul>
                <li>Access to all events</li>
                <li>Complimentary Signed Swag</li>
                <li>Backstage Access</li>
                <li>AMAs with the bands</li>
                <li>Premium VIP Seating</li>
              </ul>
            </TicketCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;

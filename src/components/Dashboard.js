import { AdminNav } from "./AdminNav";

function Dashboard() {

  return (
    <div className="text-start">
      <AdminNav />
      <div className="mx-5 my-3 text-light">
      <h1>Hello and welcome to the Dashboard</h1>
        <h5 className="pb-2 pt-4">Click on Add Cars to add cars into the car list</h5>
        <h5 className="py-2">Click on All Cars to view all cars in the database.</h5>
        <h5 className="py-2">Click on All User Bookings to view the cars booked by users.</h5>
        <h5 className="py-2">Click on Messages to view concerns given by Users.</h5>
        <h5 className="py-2">Click on Car List to view the list.</h5>
      </div>
    </div>
  );
}

export default Dashboard;
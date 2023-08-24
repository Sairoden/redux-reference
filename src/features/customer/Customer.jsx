import { useSelector } from "react-redux";

function Customer() {
  const fullName = useSelector(store => store.customer.fullName);

  return (
    <div>
      <h2>👋 Welcome, {fullName}</h2>
    </div>
  );
}

export default Customer;

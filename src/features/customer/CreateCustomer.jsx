import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function CreateCustomer() {
  const [customer, setCustomer] = useState({
    fullName: "",
    nationalID: "",
  });

  const dispatch = useDispatch();

  function handleClick() {
    const { fullName, nationalID } = customer;

    if (!fullName || !nationalID) return;

    dispatch(createCustomer({ fullName, nationalID }));
  }

  function handleCustomer(e) {
    const name = e.target.name;
    const value = e.target.value;

    setCustomer(prevCustomer => ({
      ...prevCustomer,
      [name]: value,
    }));
  }

  return (
    <div>
      <h2>Create new customers</h2>
      <div className="inputs">
        <div>
          <label htmlFor="fullName">Customer full name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={customer.fullName}
            onChange={handleCustomer}
          />
        </div>

        <div>
          <label htmlFor="nationalID">National ID</label>
          <input
            type="text"
            name="nationalID"
            id="nationalID"
            value={customer.nationalID}
            onChange={handleCustomer}
          />
        </div>

        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default CreateCustomer;

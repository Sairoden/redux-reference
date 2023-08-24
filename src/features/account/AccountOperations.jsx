import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, payLoan, requestLoan } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading,
  } = useSelector(store => store.account);

  function handleDeposit() {
    if (!depositAmount) return;

    dispatch(deposit(depositAmount, currency));

    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;

    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan({ amount: loanAmount, purpose: loanPurpose }));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label htmlFor="deposit">Deposit</label>
          <input
            type="number"
            name="deposit"
            id="deposit"
            value={depositAmount}
            onChange={e => setDepositAmount(+e.target.value)}
          />

          <select
            name="currency"
            id="currency"
            onChange={e => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button disabled={isLoading} onClick={handleDeposit}>
            {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div>
          <label htmlFor="withdraw">Withdraw</label>
          <input
            type="number"
            name="withdraw"
            id="withdraw"
            value={withdrawalAmount}
            onChange={e => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label htmlFor="loan">Request loan</label>
          <input
            type="number"
            name="loan"
            id="loan"
            onChange={e => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            type="text"
            name="loan"
            id="loan"
            onChange={e => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {currentLoan > 0 && (
          <div>
            <span>
              Pay bafck ${currentLoan}({currentLoanPurpose})
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;

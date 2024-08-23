import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import Form from "react-bootstrap/Form";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
function EmiCalculator() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [principal, setPrincipal] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [tenureType, setTenureType] = useState("months");
  const [result, setResult] = useState(null);
  const pieData = result
    ? [
        { name: "Principal Amount", value: parseFloat(principal) },
        {
          name: "Total Interest Payable",
          value: parseFloat(result.totalInterest),
        },
      ]
    : [];

  const COLORS = ["#0088FE", "#FF8042"];
  const handleSubmit = (e) => {
    e.preventDefault();
    const tenureInMonths = tenureType === "years" ? tenure * 12 : tenure;
    const emiResult = calculateEMI(
      principal,
      annualInterestRate,
      tenureInMonths
    );
    setResult(emiResult);
  };

  const handleReset = () => {
    setPrincipal("");
    setAnnualInterestRate("");
    setTenure("");
    setTenureType("months");
    setResult(null);
  };
  const calculateEMI = (principal, annualInterestRate, tenureInMonths) => {
    const monthlyInterestRate = annualInterestRate / (12 * 100);
    const emi =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, tenureInMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);
    const totalPayment = emi * tenureInMonths;
    const totalInterest = totalPayment - principal;

    // Calculating Monthly Interest for 1 lac and Flat Annual Rate of Interest
    const monthlyInterestForOneLac =
      totalInterest / (principal / 100000) / tenureInMonths;
    const flatAnnualRate = (monthlyInterestForOneLac * 12) / 1000;

    return {
      emi: emi.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      flatAnnualRate: flatAnnualRate.toFixed(2),
    };
  };

  return (
    <>
      <a  onClick={handleShow}>
        EMI <i class="bi bi-calculator-fill"></i>
      </a>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>EMI Calculator</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="card border-0 border-bottom border-primary shadow-sm">
            <div className="card-body">
              <figure>
                <figcaption>
                  <blockquote>
                    <form onSubmit={handleSubmit} className="emi-calculator">
                      <div>
                        <label>
                          Loan Amount (Principal):
                          <input
                            type="number"
                            value={principal}
                            onChange={(e) => setPrincipal(e.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Annual Interest Rate (%):
                          <input
                            type="number"
                            value={annualInterestRate}
                            onChange={(e) =>
                              setAnnualInterestRate(e.target.value)
                            }
                            required
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Loan Tenure:
                          <input
                            type="number"
                            value={tenure}
                            onChange={(e) => setTenure(e.target.value)}
                            required
                          />
                        </label>
                        <div class="input-group mb-3">
                          <div class="form-check form-check-inline w-50">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="months"
                              checked={tenureType === "months"}
                              onChange={() => setTenureType("months")}
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio1"
                            >
                              {""}months
                            </label>
                          </div>
                          <div class="form-check form-check-inline w-50">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="years"
                              checked={tenureType === "years"}
                              onChange={() => setTenureType("years")}
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio2"
                            >
                              years
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button type="submit" className="mb-4">
                          Calculate
                        </button>
                        <button type="button" onClick={handleReset}>
                          Reset
                        </button>
                      </div>
                    </form>
                  </blockquote>
                </figcaption>
              </figure>
            </div>
          </div>

          {result && (
            <>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Monthly EMI</th>
                    <th scope="col">Total Payment</th>
                    <th scope="col">Total Interest Payable</th>
                    <th scope="col">Annulaized rate of interest (Flat)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>₹{result.emi}</td>
                    <td>₹{result.totalPayment}</td>
                    <td>₹{result.totalInterest}</td>
                    <td>{result.flatAnnualRate}%</td>
                  </tr>
                </tbody>
              </table>

              <PieChart width={300} height={300}>
                <Pie
                  data={pieData}
                  cx={150}
                  cy={100}
                  labelLine={false}
                  // outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default EmiCalculator;

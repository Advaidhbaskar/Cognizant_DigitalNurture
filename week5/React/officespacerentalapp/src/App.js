import './App.css';
import office from './images/office.jpg';

function App() {

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Hyderabad"
    }
  ];

  return (

    <div style={{ marginLeft: "80px" }}>

      <h1>Office Space , at Affordable Range</h1>

      <img
        src={office}
        width="250"
        height="180"
        alt="Office Space"
      />

      {
        offices.map((item, index) => (

          <div key={index}>

            <h2>Name: {item.Name}</h2>

            <h3
              style={{
                color: item.Rent <= 60000 ? "red" : "green"
              }}
            >
              Rent: Rs. {item.Rent}
            </h3>

            <h3>Address: {item.Address}</h3>

            <hr />

          </div>

        ))
      }

    </div>

  );

}

export default App;

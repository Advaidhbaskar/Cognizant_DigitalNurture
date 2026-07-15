import React, { useState } from "react";

function CurrencyConverter() {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("Euro");

    const handleSubmit = (event) => {

        event.preventDefault();

        const euro = amount * 80;

        alert("Converting to Euro Amount is " + euro);
    };

    return (

        <div>

            <h1 style={{ color: "green" }}>
                Currency Convertor!!!
            </h1>

            <form onSubmit={handleSubmit}>

                <label>Amount: </label>

                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <br /><br />

                <label>Currency: </label>

                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >

                    <option>Euro</option>

                </select>

                <br /><br />

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>

    );

}

export default CurrencyConverter;
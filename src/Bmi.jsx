import { useState, useRef } from "react";

const BmiText = ({ bmi }) => {
    if (bmi < 18.5) return <h1>Underweight</h1>;
    if (bmi > 30) return <h1>Overweight</h1>;
    return <h1>Normal</h1>;
};

export default function Bmi() {
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [Bmi, setBmi] = useState(0.00);

    const handleClick = () => {
        const weight = parseFloat(W_input.current.value);
        const height = parseFloat(H_input.current.value) / 100;

        if (isNaN(weight) || isNaN(height) || height === 0) {
            alert("Please enter valid weight and height!");
            return;
        }

        setBmi(weight / (height * height));
    };

    return (
        <>
            <h1>BMI Calculator</h1>
            <label>
                Weight: <input ref={W_input} type="number" /> kg
            </label>
            <br />
            <label>
                Height: <input ref={H_input} type="number" /> cm
            </label>
            <br />
            <button onClick={handleClick}>Calculate</button>
            <p>BMI Value: {Bmi.toFixed(2)}</p>
            <BmiText bmi={Bmi} />
        </>
    );
}

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');
    const buttons = [
        '7', '8', '9', 'clear',
        '4', '5', '6', '/',
        '1', '2', '3', '*',
        '0', '.', '+', '-',
        '='
    ];

    const handleButtonClick = (value) => {
        if (value === 'clear') {
            setDisplayValue('');
        } else if (value === '=') {
            if (displayValue) {
                try {
                    // eslint-disable-next-line
                    setDisplayValue(eval(displayValue).toString());
                } catch (error) {
                    setDisplayValue('Error');
                }
            } else {
                setDisplayValue('Empty!');
                setTimeout(() => setDisplayValue(''), 2000);
            }
        } else {
            setDisplayValue(displayValue + value);
        }
    };

    const toggleTheme = () => {
        const calculator = document.querySelector('.calculator');
        const themeToggleBtn = document.querySelector('.theme-toggler');
        const isDark = calculator.classList.contains('dark');
        calculator.classList.toggle('dark', !isDark);
        themeToggleBtn.classList.toggle('active', !isDark);
    };

    return (
        <div className="container">
            <div className="calculator dark">
                <div className="theme-toggler active" onClick={toggleTheme}>
                    <i className="fas fa-moon toggler-icon"></i>
                </div>
                <div className="display-screen">
                    <div id="display">{displayValue}</div>
                </div>
                <div className="buttons">
                    <table>
                        {buttons.map((button, index) => (
                            <React.Fragment key={index}>
                                {index % 4 === 0 && <tr />}
                                <td>
                                    {button === 'clear' ? (
                                        <button
                                            className="btn-operator"
                                            id={button}
                                            onClick={() => handleButtonClick(button)}
                                        >
                                            <i className="far fa-trash-alt" />
                                        </button>
                                    ) : (
                                        <button
                                            className={
                                                button === '=' ? 'btn-equal' : 'btn-number'
                                            }
                                            id={button}
                                            onClick={() => handleButtonClick(button)}
                                        >
                                            {button === '*' ? '×' : button === '/' ? '÷' : button}
                                        </button>
                                    )}
                                </td>
                            </React.Fragment>
                        ))}
                    </table>
                </div>
            </div>
            <div className="footer">
                <p style={{textAlign:'right'}}>Created by Ashraf</p>
            </div>
        </div>
    );
};

export default Calculator;

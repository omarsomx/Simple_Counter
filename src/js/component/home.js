import React, { useState, useEffect } from "react";
import { Card } from "./cards.js";

//create your first component
export function Home() {
    const [myInterval, setMyInterval] = useState(null);
    const [digito1, setDigito1] = useState(0);
    const [digito2, setDigito2] = useState(0);
    const [digito3, setDigito3] = useState(0);
    const [digito4, setDigito4] = useState(0);
    const [digito5, setDigito5] = useState(0);
    const [digito6, setDigito6] = useState(0);

    function intervalRecovery(digit) {
        let interval = setInterval(function () {
            setDigito1(Math.floor(digit / 1));
            setDigito2(Math.floor(digit / 10));
            setDigito3(Math.floor(digit / 100));
            setDigito4(Math.floor(digit / 1000));
            setDigito5(Math.floor(digit / 10000));
            setDigito6(Math.floor(digit / 1000000));
            digit++;
        }, 1000);

        setMyInterval(interval);
    }

    useEffect(() => {
        intervalRecovery(0);
    }, []);

    function stopCounter() {
        clearInterval(myInterval);
        setMyInterval(null);
    }

    function startCounter() {
        clearInterval(myInterval);
        intervalRecovery(digito1);
    }

    function resetCounter() {
        clearInterval(myInterval);
        intervalRecovery(0);
    }

    let contenidos = [
        { digito: digito6 % 10 },
        { digito: digito5 % 10 },
        { digito: digito4 % 10 },
        { digito: digito3 % 10 },
        { digito: digito2 % 10 },
        { digito: digito1 % 10 }
    ];

    return (
        <div className="container justify-content-center pt-5">
            <div className="row-1">
                <div className="col-7 mx-auto">
                    <div className="card-deck">
                        <Card icon={<i className="far fa-clock"></i>} />
                        {contenidos.map((contenido, index) => (
                            <Card key={index} contenido={contenido.digito} />
                        ))}
                    </div>
                </div>
                <div className="row-2">
                    <div className="col-3 mx-auto">
                        <div
                            className="btn btn-dark btn-lg text-white m-1"
                            onClick={stopCounter}>
                            <i className="fas fa-pause"></i>
                        </div>
                        <div
                            className="btn btn-dark btn-lg text-white m-1"
                            onClick={startCounter}>
                            <i className="fas fa-play"></i>
                        </div>
                        <div
                            className="btn btn-dark btn-lg text-white m-1"
                            onClick={resetCounter}>
                            <i className="fas fa-sync"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

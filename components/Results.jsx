import React from "react";

const Results = ({ results }) => {
    return (
        <div>
            {results.map((results) => (
                <h1>{results.title}</h1>
            ))}
        </div>
    );
};

export default Results;

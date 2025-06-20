import React, { useState } from 'react';

const NLPBookingInput = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Call the NLP service to process the input
        // This is a placeholder for the actual API call
        const nlpResponse = await mockNLPService(input);
        setResponse(nlpResponse);
    };

    const mockNLPService = async (input) => {
        // Simulate an API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Processed booking request: ${input}`);
            }, 1000);
        });
    };

    return (
        <div>
            <h2>NLP Booking Input</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter your booking request"
                />
                <button type="submit">Submit</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
};

export default NLPBookingInput;
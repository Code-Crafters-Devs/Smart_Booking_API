export const processNLPInput = async (input) => {
    try {
        const response = await fetch('/api/nlp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error processing NLP input:', error);
        throw error;
    }
};
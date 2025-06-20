import { useEffect, useState } from 'react';
import { fetchRecommendations } from '../services/api';

const useRecommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRecommendations = async () => {
            try {
                const data = await fetchRecommendations();
                setRecommendations(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getRecommendations();
    }, []);

    return { recommendations, loading, error };
};

export default useRecommendations;
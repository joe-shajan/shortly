import { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (url: string) => {
    if (!url) return;
    setIsLoading(true);
    try {
      const response = await fetch(url);

      if (response.status === 400) return setError('Invalid Url');
      setError('');

      const data = await response.json();

      setData(data);
    } catch (error) {
      setError('some thing went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return [data, isLoading, error, fetchData];
};

export default useFetch;

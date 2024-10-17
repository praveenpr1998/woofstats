import {useEffect, useState} from 'react';

function useCustomLoading({delay}: {delay: number}) {
  const [customLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, delay);
  }, [delay]);
  return {customLoading};
}

export default useCustomLoading;

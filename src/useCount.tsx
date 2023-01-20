import React, { useCallback, useState } from 'react';

function useCount() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount((x) => x + 1), [])
  return { count, increment }
}

export default useCount;
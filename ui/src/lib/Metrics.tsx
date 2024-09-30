'use client';

import { CircleButton } from '@weather-app/ui';
import { useRouter } from 'next/navigation';
import { useState, MouseEvent } from 'react';

export function Metrics() {
  const [metric, setMetric] = useState('uk');
  const router = useRouter();

  console.log(metric);

  const updateSearchParams = (metric: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (metric === 'us') {
      searchParams.set('metric', metric);
    } else {
      searchParams.delete('metric');
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="flex justify-end">
      <CircleButton
        otherClasses={`${
          metric === 'uk' ? 'home__metric-button-active' : 'home__metric-button'
        } mr-1`}
        onClick={() => {
          setMetric('uk');
          updateSearchParams('uk');
        }}
      >
        <span className="">°C</span>
      </CircleButton>
      <CircleButton
        otherClasses={`${
          metric === 'us' ? 'home__metric-button-active' : 'home__metric-button'
        }`}
        onClick={() => {
          setMetric('us');
          updateSearchParams('us');
        }}
      >
        <span>°F</span>
      </CircleButton>
    </div>
  );
}

export default Metrics;

/**
 * Metrics component for toggling between temperature measurement units.
 *
 * @description The Metrics component allows users to switch between metric systems (UK or US) for temperature display. It updates the URL parameters to reflect the selected metric and applies styling based on the active selection.
 * @state {string} metric - The current metric system being used ('uk' for Celsius, 'us' for Fahrenheit).
 * @method updateSearchParams - Updates the URL search parameters based on the selected metric.
 * @returns {JSX.Element} The rendered component, consisting of two circular buttons for selecting the metric system.
 */

'use client';

import { CircleButton } from '@weather-app/ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Metrics() {
  const [metric, setMetric] = useState('uk');
  const router = useRouter();

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

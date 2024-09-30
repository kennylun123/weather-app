import { CircleButton, Hero, Metrics } from '@weather-app/ui';
import { fetchWeather } from 'apps/weather-app/utils';

export interface HomeProps {
  searchParams: {
    address: string;
    metric: string;
  };
}

export default async function Index({ searchParams }: HomeProps) {
  // const result = await fetchWeather({
  //   address: searchParams.address || '',
  //   metric: searchParams.metric || '',
  // });

  // Testing line
  const result = await fetchWeather({ address: '123', metric: '' });

  console.log(result);
  // const isResultEmpty = typeof result !== "object" || result.length < 1 || !result;

  return (
    <main>
      <h1 className="sr-only">Weather app task</h1>
      <div className="flex sm:flex-row flex-col">
        <Hero
          address={result.address[0].toUpperCase() + result.address.slice(1)}
          temp={String(result.days[0].temp) || '--'}
          condition={result.days[0].conditions || '--'}
          icon={result.days[0].icon || 'clear-day'}
          metric={searchParams.metric === 'us' ? '°F' : '°C'}
        />
        <div className="home">
          <Metrics />
          <div className="">
            {/* day overview */}
            123
            {/* containers */}
          </div>
          <div>
            {/* 5 days forecast */}
            {/* containers */}
          </div>
        </div>
      </div>
    </main>
  );
}

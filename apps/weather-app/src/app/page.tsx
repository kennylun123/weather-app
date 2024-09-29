import { Hero } from '@weather-app/ui';
import { fetchWeather } from 'apps/weather-app/utils';

export interface HomeProps {
  searchParams: {
    address: string;
  };
}

export default async function Index({ searchParams }: HomeProps) {
  const result = await fetchWeather(searchParams.address || '');

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
        />
        <div className="home__result">
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

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

/* eslint-disable-next-line */

export interface SearchButtonProps {
  otherClasses?: string;
}

export function SearchBar() {
  const [address, setAddress] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (address === '') {
      alert('Please fill in the search bar');
    }

    updateSearchParams(address.toLowerCase());
  };

  const updateSearchParams = (address: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (address) {
      searchParams.set('address', address);
    } else {
      searchParams.delete('model');
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="searchbar__item">
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter a place"
          className="searchbar__input"
        />
        <SearchButton otherClasses="searchbar__button group" />
      </div>
    </form>
  );
}

export default SearchBar;

const SearchButton = ({ otherClasses }: SearchButtonProps) => (
  <button type="submit" className={`${otherClasses}`}>
    <svg
      width="23"
      height="19"
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:fill-white group-focus:fill-white group-active:fill-white/60"
        d="M2 8C1.17157 8 0.5 8.67157 0.5 9.5C0.5 10.3284 1.17157 11 2 11V8ZM2 11H20.5V8H2V11Z"
        fill="#111111"
      />
      <path
        className="group-hover:stroke-white group-focus:stroke-white group-active:stroke-white/60"
        d="M13 2L20.5 9.5L13 17"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  </button>
);

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {

  const router = useRouter();

  const [search, setSearch] = useState("");

  const handleSearch = () => {

    router.push(
      `/colleges?search=${search}`
    );
  };

  return (
    <div className="flex gap-4 mb-8">

      <input
        type="text"
        placeholder="Search colleges or locations..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="flex-1 border rounded-xl p-4 outline-none bg-white"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl"
      >
        Search
      </button>
    </div>
  );
}
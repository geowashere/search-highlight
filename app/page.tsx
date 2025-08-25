"use client";

import { useState } from "react";

const randomText = "test abc lorem ipsum test s test a tes a";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const getFilteredText = () => {
    if (!searchText) return randomText;

    const words = randomText.split(" ");
    return words.map((word, index) => {
      if (word.toLowerCase().includes(searchText.toLowerCase())) {
        const searchIndex = word
          .toLocaleLowerCase()
          .indexOf(searchText.toLowerCase());

        const before = word.slice(0, searchIndex);
        const match = word.slice(searchIndex, searchIndex + searchText.length);
        const after = word.slice(searchIndex + searchText.length);

        return (
          <span key={index}>
            {before}
            <span className="bg-yellow-300">{match}</span>
            {after}
            <span> &nbsp;</span>
          </span>
        );
      }
      return word + " ";
    });
  };

  return (
    <div className="p-5 space-y-5">
      <input
        type="text"
        placeholder="Search..."
        className="border-b p-2"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="">{getFilteredText()}</div>
    </div>
  );
}

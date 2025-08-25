"use client";

import { useState } from "react";

const randomTexts = [
  "test abc lorem ipsum test s test a tes a",
  "test 2 string",
  "more test string",
];

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const getFilteredText = (randomText: string) => {
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
            <span>
              {/* add space if it is not the last word  */}
              {index < words.length - 1 && " "}
            </span>
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
      <div className="">
        {randomTexts.map((text, index) => (
          <p key={index}>{getFilteredText(text)}</p>
        ))}
      </div>
    </div>
  );
}

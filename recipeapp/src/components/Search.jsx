import React, { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    function demoRecipe() {
      console.log("Demo recipe function called");
    }
    demoRecipe();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
      />
    </div>
  );
}

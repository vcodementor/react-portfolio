import { useState } from "react";

const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}

export const GithubUserSerach = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onSearchChange(event) {
    setQuery(event.target.value);
  }

  async function onSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  }

  return (
    <div className="app">
      <main className="main h-screen">
        <h2>GitHub User Search</h2>
        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />
        <h3>Results</h3>
        <div id="results">
          <div>
            {results.map((user) => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function User({ avatar, url, username }) {
  return (
    <div className="user">
      <img src={avatar} alt="Profile" width="50" height="50" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {username}
      </a>
    </div>
  );
}

function Form({ onSubmit, onChange, value }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
}

import {
  useSearchParams,
} from "react-router-dom";

function SearchBar() {
  const [params, setParams] =
    useSearchParams();

  return (
    <input
      placeholder="Search Product"
      value={
        params.get("search") || ""
      }
      onChange={(e) =>
        setParams({
          search: e.target.value,
        })
      }
    />
  );
}

export default SearchBar;
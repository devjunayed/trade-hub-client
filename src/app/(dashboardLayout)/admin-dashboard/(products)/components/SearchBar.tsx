import Search, { SearchProps } from "antd/es/input/Search";
import { Dispatch, SetStateAction } from "react";

export default function SearchBar({
  setSearch,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  const onSearch = (e) => {
    console.log(e.target.value)
    setSearch(()=> e.target.value);
  };

  return (
    <Search
      onChange={onSearch}
      placeholder="input search text"
      allowClear
      enterButton
      className="custom-search"
      size="large"
    />
  );
}

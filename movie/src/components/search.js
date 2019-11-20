import React, { useState } from 'react';

const Search = props => {
  const [searchValue, setSearchValue] = useState('');

  const handlesearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetSesrchField = () => {
    setSearchValue('');
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetSesrchField();
  };

  return (
    <>
      <form className="">
        <input
          value={searchValue}
          onChange={handlesearchInputChanges}
          type="text"
        />
        <input
          onClick={callSearchFunction}
          type="submit"
          value="SEARCH"
        ></input>
      </form>
    </>
  );
};

export default Search;

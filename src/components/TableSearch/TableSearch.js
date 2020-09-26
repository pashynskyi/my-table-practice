import React, { memo, useState } from 'react';

const TableSeacrch = memo(function TableSeacrch({ onSearch }) {
  const [value, setValue] = useState('');

  const valueChangeHandler = event => {
    setValue(event.target.value)
  }

  return (
    <div className="input-group mb-4 mt-3">
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onSearch(value)}
        >
          Search&nbsp;
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
          </svg>
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Enter text"
        value={value}
        onChange={valueChangeHandler}
      />
    </div>
  )
});

export default TableSeacrch;

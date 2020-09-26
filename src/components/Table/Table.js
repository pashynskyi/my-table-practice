import React from 'react';
import SortIndicate from './SortIndicate/SortIndicate';

export default ({ data, onSort, sort, sortField, onRowSelect }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th onClick={onSort.bind(null, 'id')}>
          ID {sortField === 'id' &&
            <SortIndicate sort={sort} />
          }
        </th>
        <th onClick={onSort.bind(null, 'first_name')}>
          First Name {sortField === 'first_name' &&
            <SortIndicate sort={sort} />
          }
        </th>
        <th onClick={onSort.bind(null, 'last_name')}>
          Last Name {sortField === 'last_name' &&
            <SortIndicate sort={sort} />
          }
        </th>
        <th onClick={onSort.bind(null, 'email')}>
          Email {sortField === 'email' &&
            <SortIndicate sort={sort} />
          }
        </th>
      </tr>
    </thead>
    <tbody>
      {data.length === 0
        ? <tr><th>No users found</th></tr>
        : data.map(item => (
          <tr key={item.id}
            onClick={onRowSelect.bind(null, item)}
          >
            <th>{item.id}</th>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
    </tbody>
  </table>
)
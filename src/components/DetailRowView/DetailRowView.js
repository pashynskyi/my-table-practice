import React, { Fragment } from 'react';

export default ({ person }) => (
  <Fragment>
    <h2 className="mt-5">Выбраный пользователь:</h2>
    <div className="d-flex pt-3">
      <img src={person.avatar} alt="" />
      <div className="pl-3">
        <p>
          <b>Full Name: </b>
          <i>{person.first_name} {person.last_name}</i>
        </p>
        <p>
          <b>Email: </b>
          <i>{person.email}</i>
        </p>
      </div>
    </div>
  </Fragment>
)
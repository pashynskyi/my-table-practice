import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import Loader from './components/Loader/Loader';
import Table from './components/Table/Table';
import DetailRowView from './components/DetailRowView/DetailRowView';
import TableSearch from './components/TableSearch/TableSearch';

class App extends Component {
  state = {
    isLoading: true,
    data: [],
    sort: 'asc', //desc
    sortField: 'id',
    row: null,
    search: ''
  }

  baseURL = 'https://reqres.in';

  async componentDidMount() {
    const response = await fetch(`${this.baseURL}/api/users`)
    const data = await response.json();

    this.setState({
      isLoading: false,
      data: _.orderBy(data.data, this.state.sortField, this.state.sort)
    })
  }

  onSort = sortField => {
    const clonedData = this.state.data.concat()
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'

    const orderedData = _.orderBy(clonedData, sortField, sortType)

    this.setState({
      data: orderedData,
      sort: sortType,
      sortField
    })
  }

  onRowSelect = row => {
    this.setState({ row })
  }

  searchHandler = search => {
    this.setState({ search })
  }

  getFilteredData() {
    const { data, search } = this.state;

    if (!search) {
      return data
    }

    return data.filter(item => {
      return item['first_name'].toLowerCase().includes(search.toLowerCase())
        || item['last_name'].toLowerCase().includes(search.toLowerCase())
        || item['email'].toLowerCase().includes(search.toLowerCase())
    })
  }

  render() {
    const filteredData = this.getFilteredData()

    return (
      <div className="container">
        {
          this.state.isLoading
            ? <Loader />
            : <Fragment>
              <TableSearch onSearch={this.searchHandler} />
              <Table
                data={filteredData}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect}
              />
            </Fragment>
        }

        {
          this.state.row
          && <DetailRowView person={this.state.row} />
        }
      </div>
    );
  }
}

export default App;

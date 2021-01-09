import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchPanel.css';

export default class SearchPanel extends Component {
  state = { term: '' }

  // получение данных из input, обновление локального state и передача в App для поиска
  onSearchChange = e => {
    const text = e.target.value;
    this.setState({ term: text });
    this.props.onSearch(text);
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="type to search task"
        value={ this.state.inputValue }
        onChange={ this.onSearchChange }>
      </input>
    );
  }
}

SearchPanel.propTypes = {
  onSearch: PropTypes.func
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
  // свойства табов
  tabsProperties = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ]

  render() {
    const { filter, onFilter } = this.props;

    // стилизация табов и фильтрация данных по клику на таб
    const tabs = this.tabsProperties.map(({ label, name }) => {
      const isActiveTab = filter === name;
      const tabClassName = isActiveTab ? 'btn-primary' : 'btn-outline-secondary';

      return (
        <button
          type="button"
          className={`btn ${tabClassName}`}
          key={ name }
          onClick={ () => onFilter(name) }>
          { label }
        </button>
      );
    });

    return (
      <div className="buttons btn-group" role="group">
        { tabs }
      </div>
    );
  }
}

ItemStatusFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func
};

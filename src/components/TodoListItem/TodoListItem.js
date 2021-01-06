import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';

// * для React первый аргумент компонента-класса - это объект со свойствами (атрибутами), передаваемыми в react-элемент
// * традиционное именование этого объекта - props
export default class TodoListItem extends React.Component {
  // * метод render(), наследуемый из класса React.Component, возвращает react-элемент (как в функциональном компоненте)
  render() {
    // * деструктуризация используется, чтобы получить свойства из объекта props
    const { label, important = false } = this.props;
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <div className="todo-list-item">
        <span className="todo-list-item-label" style={ style }>{ label }</span>
        <button type="button" className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool
};

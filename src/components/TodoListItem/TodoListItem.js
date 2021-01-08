import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';

// в React первый аргумент компонента-класса - это объект со свойствами (атрибутами), передаваемыми в react-элемент
// традиционное именование этого объекта - props (properties)
// описание компонентов через классы, а не через функции позвляет хранить и обновлять внутренее состояние компонента
export default class TodoListItem extends Component {
  // внутреннее состояние компонента
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    // setState работает асинхронно!
    // если текущее состояние компонента зависит от предыдущего, нужно передавать в функцию аргумент state для
    // получения актуального на момент вызова функции состояния,
    // иначе можно передавать в stateState просто объект
    this.setState(state => ({ done: !state.done }));
  };

  onMarkImportant = () => {
    this.setState(state => ({ important: !state.important }));
  };

  // метод render(), наследуемый от класса React.Component, возвращает react-элемент (как в функциональном компоненте)
  render() {
    // деструктуризация используется, чтобы получить свойства из объекта props
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    // создание react-элемента
    return (
      <div className={ classNames }>
        <span
          className="todo-list-item-label"
          style={ style }
          onClick={ this.onLabelClick }>
          { label }
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={ this.onMarkImportant }>
          <i className="fa fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={ onDeleted }>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool,
  onDeleted: PropTypes.func
};

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App/App';

// * первый аргумент метода ReactDom.render() принимает исключительно react-элемент
// * чтобы сделать react-элемент из компонента нужно прописать <.../>
ReactDom.render(<App/>, document.querySelector('.root'));

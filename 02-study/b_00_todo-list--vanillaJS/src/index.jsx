import './css/app.scss';
import './css/style.scss';

type TodoType = {
  id: string,
  text: string,
  done: boolean,
};

const initialList: TodoType[] = [
  { id: 'id1', text: '學會React', done: true },
  { id: 'id2', text: '學會Webpack', done: false },
  { id: 'id3', text: '年薪百萬', done: false },
];

const form = document.getElementById('todo__form');
const formInput = document.getElementById('todo__form-input');
const todoItemsWrap = document.getElementById('todo__items-wrap');

const renderView = () => {
  console.log('renderView');
  /* // TODO
  const todoChild = initialList.map((todo) => {
    let className = 'todo-item';
    if (todo.done) {
      className += ' done';
    }
    return `
      <li class="${className}" data-id="${todo.id}">
        ${todo.text}
      </li>
    `;
  });
  todoItemsWrap.innerHTML = todoChild;
  // */

  /* // TODO
  document.querySelectorAll('.todo-item').forEach((ele) => {
    ele.addEventListener('click', (e) => {
      const { id } = e.currentTarget.dataset;
      atToggleItem(id);
    });
  });
  // */
};

const atAddItem = (text: string) => {
  console.log('atAddItem', text);
  const item: TodoType = {
    id: new Date().getTime().toString(),
    text,
    done: false,
  };
  initialList.push(item);
  renderView();
};
const atToggleItem = (id: string) => {
  console.log('atToggleItem', id);
  initialList.forEach((item: TodoType) => {
    if (item.id === id) {
      item.done = !item.done;
    }
  });
  renderView();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  atAddItem(formInput.value);
});

renderView();

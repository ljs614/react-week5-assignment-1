import React from 'react';

export default function ButtonList({
  listId = 'button-list', items, selectedId, handleClickButton,
}) {
  return (
    <ol id={listId}>
      {
        items.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => handleClickButton(id)}>
              {name}
              {id === selectedId && ' (V)'}
            </button>
          </li>
        ))
      }
    </ol>
  );
}

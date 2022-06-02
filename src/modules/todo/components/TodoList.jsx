import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import TodoElement from "./TodoElement";
import PlusIcon from "../../common/icons/PlusIcon";

function TodoList(props) {
  const [todoElements, setTodoElements] = useState(props.todoElements);

  const addEditableElement = () => {
    const reqBody = {
      title: 'TODO',
      description: 'Opis',
    };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    console.log('props', props);
    console.log(todoElements);
  }, [todoElements])

  return (
    <TodoListContent>
      {todoElements.map((todoElement, index) => <TodoElement element={todoElement} selected={index === 0}/>)}
      <ActionButton>
        <FeaturedIcon onClick={() => addEditableElement()}>
          <PlusIcon/>
        </FeaturedIcon>
      </ActionButton>
    </TodoListContent>
  );
}

const TodoListContent = styled.div`
  display: flex;
  flex-direction: column;
`

const ActionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const FeaturedIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background: ${props => props.theme.color.primary[100]};
  border-radius: 28px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.color.primary[200]};
  }
`

export default TodoList;
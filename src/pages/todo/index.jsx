import path from 'path';
import fs from 'fs/promises';

import React from 'react';
import styled from 'styled-components'
import TodoList from "../../modules/todo/components/TodoList";


function TodoPage(props) {
  return (
    <Container>
      <Content>
        <TodoList todoElements={props.todoElements}/>
      </Content>
    </Container>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'todoElements.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      todoElements: data.todoElements
    }
  }
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
`

export default TodoPage;
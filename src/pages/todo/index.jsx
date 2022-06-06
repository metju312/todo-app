import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import TodoList from "../../modules/todo/components/TodoList";
import useSWR from 'swr';
import {getAllTodoElements} from "../../modules/todo/api/todo-api";


function TodoPage() {
  const [todoElements, setTodoElements] = useState([]);

  const {data, error} = useSWR('/api/todo-elements', (url) => fetch(url).then(res => res.json()));

  useEffect(() => {
    if(data) {
      console.log('data', data);
      setTodoElements(data);
    }
  }, [data]);

  if(error) {
    return (<div>Failed to load</div>)
  }

  if(!data || !todoElements) {
    return (<div>Loading...</div>)
  }


  return (<Container>
      <Content>
        <TodoList todoElements={todoElements}/>
      </Content>
    </Container>);
}

export async function getStaticProps() {
  const todoElements = await getAllTodoElements();

  return {
    props: {
      todoElements: todoElements
    },
    revalidate: 1800
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
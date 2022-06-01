import React from 'react';
import {useRouter} from "next/router";
import {getAllTodoElements, getTodoElementById} from "../../modules/todo/api/todo-api";
import todo from "./index";

function TodoElementPage({selectedTodoElement}) {
  const router = useRouter();

  console.log('router.query', router.query);

  if (!selectedTodoElement) {
    return (<p>Loading...</p>)
  }

  return (
    <>
      <div>TodoElementPage: {selectedTodoElement.id}</div>
      <div>{selectedTodoElement.description}</div>
    </>
  );
}

export async function getStaticProps(context) {
  const todoElementId = context.params.todoId;
  const selectedTodoElement = await getTodoElementById(todoElementId);

  return {
    props: {
      selectedTodoElement: selectedTodoElement
    }
  }
}

export async function getStaticPaths() {
  const todoElements = await getAllTodoElements();

  const params = todoElements.map(todoElement => ({params: {todoId: todoElement.id}}))

  return {
    paths: params,
    fallback: true
  }
}

export default TodoElementPage;
import React from 'react';
import {useRouter} from "next/router";
import path from "path";
import fs from "fs/promises";

function TodoElementPage({loadedTodoElement}) {
  const router = useRouter();

  console.log('router.query', router.query);

  if (!loadedTodoElement) {
    return (<p>Loading...</p>)
  }

  return (
    <div>TodoElementPage: {loadedTodoElement.id}</div>
  );
}

export async function getStaticProps(context) {
  const {params} = context;
  const todoElementId = params.todoId;

  const filePath = path.join(process.cwd(), 'data', 'todoElements.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const todoElement = data.todoElements.find(element => element.id === todoElementId);

  if (!todoElement) {
    return {notFound: true}
  }

  return {
    props: {
      loadedTodoElement: todoElement
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {todoId: '1'}}
    ],
    fallback: true
  }
}

export default TodoElementPage;
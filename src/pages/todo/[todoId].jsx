import React from 'react';
import {useRouter} from "next/router";

function TodoElementPage() {
  const router = useRouter();

  console.log('router.query', router.query);

  return (
    <div>TodoElementPage: {router.query.todoId}</div>
  );
}

export default TodoElementPage;
import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
const One = () => {

    const {data,error,isLoading}=useQuery({
        queryKey:['todo'],
        queryFn:()=>axios.get('https://jsonplaceholder.typicode.com/todos/')
    })
    console.log('data in loaded',data)
    if(error) return <div>Error for Data Fetching</div>
    if(isLoading) return <div>Loading...</div>
    const todo=data.data
    console.log('todo setup in ',todo)
  return (
    <div>
      <h1>Todo List</h1>
      {Array.isArray(todo) ? (
        todo.map((item) => (
          <div key={item.id} className="p-2 border-b">
            <h2>{item.title}</h2>
          </div>
        ))
      ) : (
        <div>No todos found</div>
      )}
    </div>
    
  )
}

export default One

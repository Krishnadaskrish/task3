import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';



function App() {
  const [post,setPost]=useState([])

  useEffect(()=>{
  fetch('https://dummyjson.com/quotes')
  .then(res => res.json())
  .then(value=>{
     console.log(value)
    Array.isArray(value.quotes)?
  setPost(value.quotes.slice(0,10))
  :console.log('not avilable')})
},[])



  return (
    <div>
      {post.map((post,i)=> 
      
     <h1 key={i}>{post.quote}</h1>
     )}
      
    </div>
  );
}


export default App;


import { useEffect, useState } from 'react';
import './App.css';
import AuthForm from './components/Auth';
import Books from './components/Books';
import Book from './components/Books/Book';
import { useSelector } from 'react-redux';

function App() {
  const authUser = useSelector((state) => state.auth)
  console.log(authUser)



  return (
    <>
      {!authUser && <AuthForm />}

      <Books />
      <Book />
    </>
  );
}

export default App;

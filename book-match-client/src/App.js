import { useEffect, useState } from 'react';
import './App.css';
import AuthForm from './components/Auth';
import Books from './components/Books';
import Book from './components/Books/Book';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooksAsync } from './features/services/book';

function App() {
  const authUser = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  console.log(authUser)


  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, [dispatch]);

  return (
    <>
      {!authUser && <AuthForm />}

      <Books />
      <Book />
    </>
  );
}

export default App;

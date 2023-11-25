import { useEffect, useState } from 'react';
import './App.css';
import AuthForm from './components/Auth';
import Books from './components/Books';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooksAsync } from './features/services/book';
import { showAllRequestsAsync } from './features/services/matchBook';

function App() {
  // const authUser = useSelector((state) => state.auth)
  const authUser = JSON.parse(sessionStorage.getItem('user'))
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);
  const { bookRequests, reqLoading, reqError } = useSelector((state) => state.match);

  console.log("auth user", authUser)

  useEffect(() => {
    dispatch(getAllBooksAsync());
    if (authUser) dispatch(showAllRequestsAsync())
  }, []);

  console.log("book Requested", bookRequests)
  return (
    <div>
      {!authUser?.user && <AuthForm />}
      <h5>All books</h5>
      <Books books={books} error={error} loading={loading} />
      <h5>Requested Books</h5>
      <Books books={bookRequests} error={reqError} loading={reqLoading} requestedBook={true} />

    </div>
  );
}

export default App;

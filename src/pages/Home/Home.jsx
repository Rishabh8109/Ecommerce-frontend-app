import React   from 'react'
import {useSelector} from 'react-redux';
import useFetch from '../../hooks/useFetch';

function Home() {
  const {users} = useFetch('http://localhost:5000/api/user' , []);
  return (
    <div>
      home
    </div>
  )
}

export default Home

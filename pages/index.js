import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchposts } from '../store/actions/postAction';
import Toolbar from '../components/Toolbar';
import Link from 'next/link'
import Router from 'next/router';

export default function Home() {
  const dispatch = useDispatch();
  const { skata } = useSelector(state => state.post);

  const test = () => {
    dispatch(fetchposts())
  }

  return (
    <div>
      {skata}
      <button onClick={test}>TEST</button>
      <Link href="/test">
        <a>Home</a>
      </Link>
      <button onClick={() => Router.push('/test/about')}>got to test / about</button>

      <Link href='/promise'><a>PromisePage</a></Link>
    </div>
  )
}

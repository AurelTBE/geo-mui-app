import type { NextPage } from 'next'
import Container from '@mui/material/Container';
import SearchPanel from '../components/SearchPanel'

const Home: NextPage = () => {
  return (
    <div>
      <SearchPanel />
    </div>
  )
}

export default Home

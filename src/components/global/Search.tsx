import React, {useState} from 'react'

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <div className={'search w-100 position-relative w-100 me-4'}>
      <input type="text" onChange={e => setSearch(e.target.value)} className={'form-control me-2 w-100'} value={search} placeholder={"Enter your search"}/>
    </div>
  )
}

export default Search;

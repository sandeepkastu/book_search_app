import React,{useState} from 'react'
import './App.css';

function App() {

  const [input,setInput]=useState('')
  const [data,setData]=useState({})

  const Search=async()=>{
   
    await fetch('https://www.googleapis.com/books/v1/volumes?q=%7BbookTitle').then((res)=>res.json()).then((object)=>{setData(object)})
    console.log(data.items[0].volumeInfo.imageLinks.smallThumbnail)
  }
 

  return (
    <div className="App">
      <header className="App-header">
        <img className='logo' src='https://static.vecteezy.com/system/resources/previews/000/585/971/original/vector-book-reading-logo-and-symbols-template-icons.jpg' width='100px' height='75px' alt='book-logo' />
        <br/><br/><input onChange={(e)=>setInput(e.target.value)} id='search' />
        <button onClick={Search}>SEARCH</button>

        {data.items.map((result,i)=>( 
        <span key={result.toString()+i} className='books'><img  src={result.volumeInfo.imageLinks.smallThumbnail} alt='' /></span>
        ))}    
        
        
      </header>
    </div>
  );
}

export default App;

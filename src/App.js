
   
import React,{ useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Search from "./component/Search/Search";
import MovieData from "./component/MovieData/Data";
import MovieList from "./component/MovieList/MovieList";
import AddMovie from "./component/AddMovie/AddMovie";


function App(){
  const [title , setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const [Data, setData]=useState(MovieData)

  const handleTitle=(input)=>{
    setTitle(input)
  }
  const handleRate=(input)=>{
    setRate (input)
  }
  const handleData=(input)=>{
    setData([...Data,input])
  }

  return(
    <div className="App">
      <Header  text="ANIME MOVIES" />
      <Search 
      handleTitle={handleTitle}
      handleRate={handleRate} />
      <p className="App-intro">Top Movies</p>
      <AddMovie handleData={handleData}/>
      <MovieList Data={Data}
      title={title}
      rate={rate}/>

    </div>
    
  )

}

export default App
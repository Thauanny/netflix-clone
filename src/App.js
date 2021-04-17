import React, {useEffect, useState} from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow'



const App = () => {

  const [MovieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      //pegando lista total dos filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
    }
    loadAll();
  }, []);

  return (
    <div className="HomePage">
      <section className="lists">
        {MovieList.map((item, key)=>(
         
          <MovieRow key={key} title={item.title} items={item.items}/>
          
        ))}
      </section>
    </div>
  );
}

export default App;
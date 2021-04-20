import React, {useEffect, useState} from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'



const App = () => {

  const [MovieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(()=>{
    const loadAll = async () => {
      //pegando lista total dos filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o featured(filme em destaque)
      let originals = list.filter(i=>i.slug === "originals"); //filtro para apenas filmes originais
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)); // numero aleatoria de acordo com a quatidade de filmes originais
      let chosen = originals[0].items.results[randomChosen];

      let choseninfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(choseninfo);
    }
    loadAll();
  }, []);

  return (
    <div className="HomePage">
      <section className="featured">
          {featuredData &&
            <FeaturedMovie item={featuredData}/>
          }
      </section>
      <section className="lists">
        {MovieList.map((item, key)=>(
         
          <MovieRow key={key} title={item.title} items={item.items}/>
          
        ))}
      </section>
    </div>
  );
}

export default App;
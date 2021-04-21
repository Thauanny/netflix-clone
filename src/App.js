import React, {useEffect, useState} from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'



const App = () => {

  const [MovieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 100){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[]);

  return (

    

    <div className="HomePage">

      <section className="Header">
        <Header black={blackHeader}/>
      </section>

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

      <footer className="footer">
          Feito por Thauanny com a ajuda de B7Web
          Direitos de imagem para Netflix
          Dados pegos do site Themoviedb.org
      </footer>

      {MovieList.length <= 0 && 
      <div className="loading">
          <img src="https://www.sanluis24.com.ar/wp-content/uploads/2021/03/netflix-the-m-virus-sick-symbol.gif" alt="loading"></img>
      </div>
      }
    </div>

   


  );
}

export default App;
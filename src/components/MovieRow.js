import React from 'react';
import './MovieRow.css';




const MovieRow = ({title, items}) => {
    console.log(items);
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listArea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key)=> (
                        <div className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={"Capa"} key={key}></img>
                        </div>
                    ))} 
                </div>
                
            </div>
        </div>
    );
    
}

export default MovieRow;
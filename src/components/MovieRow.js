import React, {useState}from 'react';
import './MovieRow.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';




const MovieRow = ({title, items}) => {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 4);
        if(x > 0){
            x = 0;
        }

        setScrollX(x)
    }

    const handlerighttArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 4);
        let listW = items.results.length * 150;
        if((window.innerWidth-listW) > x){
            x = (window.innerWidth-listW) - 60;
        }
        setScrollX(x)
    }

    return(
        <div className="movieRow" >
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--rigth" onClick={handlerighttArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--listArea">
                <div className="movieRow--list" style={{marginLeft: scrollX, width: items.results.length * 150}}>
                    {items.results.length > 0 && 
                        items.results.map((item, key)=> (
                            <div className="movieRow--item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={"Capa"} key={key}></img>
                            </div>
                        ))
                    } 
                </div>
                
            </div>
        </div>
    );
    
}

export default MovieRow;
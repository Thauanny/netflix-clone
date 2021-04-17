const API_KEY = "e4357e1610a457171f291ea6688a5cb9";
const API_BASE = "https://api.themoviedb.org/3";

/**
 - originais  da netflix
 - recomendados 
 - em alta
 - acao
 - comedia
 - terror
 - romance
 - documentarios
 - ficcao
*/


const basicFetch = async (endpoint) => {
    const response = await fetch(`${API_BASE}${endpoint}`);
    const json = await response.json();
    return json;  
}


var getHomeList = {
    getHomeList :  async () => {
        return [
            {
                slug: 'originals',
                title: 'Mais assistidos',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'top-rated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documetário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'fiction',
                title: 'Ficcão',
                items: await basicFetch(`/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
} 

export default getHomeList;

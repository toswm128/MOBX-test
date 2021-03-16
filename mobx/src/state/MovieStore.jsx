import { action, isObservable, makeObservable,observable } from "mobx"

class Movie{
    id;
    title;
    rate;

    constructor(id,title,rate){
        this.id = id;
        this.title = title;
        this.rate = rate
    }
}

export class MovieStore{
    rootStore;

    movies = [];

    constructor(root){
        makeObservable(this, {
            movies: isObservable,
            createMovie: action,
            deletMovie: action,
            changeRate: action,
        })
        
        this.movies = root;

        this.movies = [
            new Movie(1,"LOTR",5),
            new Movie(2, "승리호",4),
            new Movie(3,"창궐",0),
        ]

    }

    createMovie(title,rate){
        this.movies = [
            ...this.movies,
            new Movie(this.movies[this.movies.length - 1].id + 1, title, rate ),
        ]
    }

    deletMovie(id){
        this.movies = this.movies.filter(x=>x.id !==id);
    }

    changeRate(id,rate){
        const idx = this.movies.findIndex(x=> x.id === id);
        const movie = this.movies[idx];

        this.movies = [
            ...this.movies.slice(0,idx),
            new Movie(movie.id,movie.title,rate),
            ...this.movies.slice(idx + 1, this.movies.length), 
        ]
    }
}
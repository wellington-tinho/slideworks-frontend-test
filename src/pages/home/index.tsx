import { useFetch } from "../../hooks/useFetch"
// {
//   "data": [
//     {
//       "title": "The Shawshank Redemption",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "9.2",
//       "year": "1994",
//       "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman"
//     },
//     {
//       "title": "The Godfather",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
//       "rating": "9.2",
//       "year": "1972",
//       "crew": "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino"
//     },
//     {
//       "title": "The Dark Knight",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "9.0",
//       "year": "2008",
//       "crew": "Christopher Nolan (dir.), Christian Bale, Heath Ledger"
//     },
//     {
//       "title": "The Godfather Part II",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
//       "rating": "9.0",
//       "year": "1974",
//       "crew": "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro"
//     },
//     {
//       "title": "12 Angry Men",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "9.0",
//       "year": "1957",
//       "crew": "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb"
//     },
//     {
//       "title": "Schindler's List",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.9",
//       "year": "1993",
//       "crew": "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes"
//     },
//     {
//       "title": "The Lord of the Rings: The Return of the King",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.9",
//       "year": "2003",
//       "crew": "Peter Jackson (dir.), Elijah Wood, Viggo Mortensen"
//     },
//     {
//       "title": "Pulp Fiction",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.8",
//       "year": "1994",
//       "crew": "Quentin Tarantino (dir.), John Travolta, Uma Thurman"
//     },
//     {
//       "title": "The Lord of the Rings: The Fellowship of the Ring",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.8",
//       "year": "2001",
//       "crew": "Peter Jackson (dir.), Elijah Wood, Ian McKellen"
//     },
//     {
//       "title": "The Good, the Bad and the Ugly",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.8",
//       "year": "1966",
//       "crew": "Sergio Leone (dir.), Clint Eastwood, Eli Wallach"
//     },
//     {
//       "title": "Forrest Gump",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.8",
//       "year": "1994",
//       "crew": "Robert Zemeckis (dir.), Tom Hanks, Robin Wright"
//     },
//     {
//       "title": "Fight Club",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.7",
//       "year": "1999",
//       "crew": "David Fincher (dir.), Brad Pitt, Edward Norton"
//     },
//     {
//       "title": "The Lord of the Rings: The Two Towers",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.7",
//       "year": "2002",
//       "crew": "Peter Jackson (dir.), Elijah Wood, Ian McKellen"
//     },
//     {
//       "title": "Inception",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.7",
//       "year": "2010",
//       "crew": "Christopher Nolan (dir.), Leonardo DiCaprio, Joseph Gordon-Levitt"
//     },
//     {
//       "title": "Star Wars: Episode V - The Empire Strikes Back",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.7",
//       "year": "1980",
//       "crew": "Irvin Kershner (dir.), Mark Hamill, Harrison Ford"
//     },
//     {
//       "title": "The Matrix",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.7",
//       "year": "1999",
//       "crew": "Lana Wachowski (dir.), Keanu Reeves, Laurence Fishburne"
//     },
//     {
//       "title": "Goodfellas",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.7",
//       "year": "1990",
//       "crew": "Martin Scorsese (dir.), Robert De Niro, Ray Liotta"
//     },
//     {
//       "title": "One Flew Over the Cuckoo's Nest",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.6",
//       "year": "1975",
//       "crew": "Milos Forman (dir.), Jack Nicholson, Louise Fletcher"
//     },
//     {
//       "title": "Se7en",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.6",
//       "year": "1995",
//       "crew": "David Fincher (dir.), Morgan Freeman, Brad Pitt"
//     },
//     {
//       "title": "It's a Wonderful Life",
//       "image_url": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_Ratio0.6716_AL_.jpg",
//       "rating": "8.6",
//       "year": "1946",
//       "crew": "Frank Capra (dir.), James Stewart, Donna Reed"
//     }
//   ],
//   "pagination": {
//     "limit": 20,
//     "page": 1,
//     "maxPage": 13,
//     "total": 250
//   }
// }
interface IMovie {

  data:[{
    title: string;
    image_url: string;
    rating: string;
    year: string;
    crew: string;
  }],
  pagination: {
    limit: number;
    page: number;
    maxPage: number;
    total: number;
  }
}

export function Home() {
const {data, isloading} = useFetch<IMovie>('')

const movies = data?.data
// const pagination = data?.pagination

  return (
    <>
    {isloading ? (
      <p>Carregando...</p>
    ) : (
      <div>
        {movies?.map((movie, index) => (
          <div  key={index}>
            <h1>{movie.title}</h1>
            <img src={movie.image_url} alt={movie.title} />
            <p>{movie.rating}</p>
            <p>{movie.year}</p>
            <span>{movie.crew}</span>
          </div>
        ))}
      </div>
    )}
    </>
  )
}
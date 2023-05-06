import { useFetch } from "../../hooks/useFetch"

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

export function ListMovies(){

  const {data, isloading} = useFetch<IMovie>('')
  const movies = data?.data

  // const pagination = data?.pagination
  return (
    <>
    {isloading ? (
      <p>Carregando...</p>
    ) : (
      <nav className="flex flex-wrap gap-4 p-2 max-w-screen-xl mx-auto justify-center">
        {movies?.map((movie, index) => (
          <div key={index} className="border border-gray p-4 rounded-2xl max-w-[280px] max-h-[602px]
            hover:border-gray-300 transition duration-300 ease-in-out hover:scale-[1.02] cursor-pointer	
          ">
            <img className="h-[372px] w-[248px] rounded-lg object-cover" src={movie.image_url} alt={movie.title} />
            <div className="mt-4">
              <h1 className="font-montserrat font-semibold text-lg">{movie.title}</h1>
              <p className="font-montserrat font-medium text-sm">Ano de lançamento: {movie.year}</p>
              <p className="font-montserrat font-normal text-sm mt-2 mb-4 ">{movie.crew}</p>
              <div className="bg-[#726BEA] p-2 rounded-2xl py-2 px-4 flex items-center gap-1 w-[fit-content]">
                <img src="src/assets/icons/star.svg" alt="Estrela" className="inline-block w-4 h-4"/>
                <span className="font-montserrat font-medium text-sm text-white">
                  {movie.rating}/10 
                </span>
              </div>
            </div>
          </div>
        ))}
      </nav>
    )}
    </>
  )
}
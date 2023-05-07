import { Carrosel } from "../../components/Carroseal";
import { Header } from "../../components/Header";
import { ListMovies } from "../../components/ListMovies";
import { Spiner } from "../../components/Spiner";
import { useFetch } from "../../hooks/useFetch";

export function Home() {
  const { data, isloading } = useFetch<DMovies.IMovies>("");

  return (
    <div className="container flex justify-start items-center flex-col mx-auto">
      <Header />
      {isloading || !data ? ( // if isloading or data is null or undefined show Spiner
        <Spiner />
      ) : (
        <>
          <Carrosel movies={data?.data} />
          <ListMovies movies={data?.data} />{" "}
        </>
      )}
    </div>
  );
}

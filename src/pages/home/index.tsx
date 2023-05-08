import { useState } from "react";
import { Carrosel } from "../../components/Carroseal";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListMovies } from "../../components/ListMovies";
import Pagination from "../../components/Pagination";
import { Spiner } from "../../components/Spiner";
import { useFetch } from "../../hooks/useFetch";

export function Home() {
  const [page, setPage] = useState(1);
  const url = `?page=${page}`;
  const { data, isloading } = useFetch<DMovies.IMovies>(url);

  return (
    <div className="container flex justify-start items-center flex-col mx-auto">
      <Header />
      {isloading || !data ? ( // if isloading or data is null or undefined show Spiner
        <Spiner />
      ) : (
        <>
          <Carrosel movies={data?.data} />
          <ListMovies movies={data?.data} />
          <Pagination
            activePage={page}
            setPage={setPage}
            total={data?.pagination.maxPage}
          />
        </>
      )}
      <Footer />
    </div>
  );
}

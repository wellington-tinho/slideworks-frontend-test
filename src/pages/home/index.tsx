import { useMemo, useState } from "react";
import { Carrosel } from "../../components/Carroseal";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListMovies } from "../../components/ListMovies";
import { Pagination } from "../../components/Pagination";
import { Spiner } from "../../components/Spiner";
import { useFetch } from "../../hooks/useFetch";


export function Home() {
  const [page, setPage] = useState(1);
  const url = useMemo(() => `?page=${page}`, [page]); // useMemo is used to prevent the url from being recreated every time the component is rendered
  const { data, isError, isFetching, isLoading } =
  
  useFetch<DMovies.IMovies>(url); // useSWRConfig is used to invalidate the cache

  function handlePageChange(page: number) {
    setPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="container flex justify-start items-center flex-col mx-auto scroll-smooth">
      <Header />
      {isLoading || isError || isFetching ? ( // if isloading or iserror or isfetching is true, show the spinner
        <Spiner />
      ) : (
        <>
          <Carrosel movies={data?.data} />
          <ListMovies movies={data?.data} />
          <Pagination
            activePage={page}
            setPage={handlePageChange}
            total={data?.pagination.maxPage}
          />
        </>
      )}
      <Footer />
    </div>
  );
}

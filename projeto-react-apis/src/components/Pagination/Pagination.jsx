import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { PaginationButton, Button } from "./PaginationStyle"



export default function Pagination() {
  const { totalPokemons, pokemonsPerPage, currentPage, setCurrentPage } = useContext(GlobalContext)
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PaginationButton>
      {pages.map((page, index) => {
        return <Button
        key={index} 
        onClick={() => handleClick(page)}
        className={page === currentPage ? 'active' : ''}>{page}</Button>
      })
      }
    </PaginationButton>
  );
}

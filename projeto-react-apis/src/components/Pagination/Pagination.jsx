import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Pagination from 'react-bootstrap/Pagination';

export default function CustomPagination() {
  const { totalPokemons, pokemonsPerPage, currentPage, setCurrentPage } = useContext(GlobalContext)
  const pages = []

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const getScreenSize =() => {
    const isLargeScreen = window.matchMedia('(min-width: 900px)').matches;
  
    return isLargeScreen ? 'lg' : 'sm';
  }

  const screenSize = getScreenSize()

  const showEllipsis = (index, pages) => {
    return index === 0 || index === pages.length - 1 || (index >= currentPage - 3 && index <= currentPage + 1)
  }

  return (
    <Pagination size={screenSize}>
        <Pagination.First onClick={() => handleClick(1)} />
        <Pagination.Prev onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
        {pages.map((page, index) => {
          if (showEllipsis(index, pages)) {
            return (
              <Pagination.Item
                key={index}
                active={page === currentPage}
                onClick={() => handleClick(page)}
              >
                {page}
              </Pagination.Item>
            )
          } else if (index === currentPage - 4 || index === currentPage + 2) {
            return <Pagination.Ellipsis key={index} />;
          }
          return null;
        })}
        <Pagination.Next onClick={() => handleClick(currentPage + 1)} disabled={currentPage === pages.length} />
        <Pagination.Last onClick={() => handleClick(pages.length)} />
    </Pagination>
  )
}

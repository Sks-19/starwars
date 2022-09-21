import ReactPaginate from "react-paginate";

const Paginate = (props) => {
  const fetchCharacters = async (currentPage) => {
    const res = await fetch(
      `https://swapi.dev/api/people/?page=${currentPage}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    const getData = await fetchCharacters(currentPage);

    props.setStarwarsData(getData.results);
  };
  return (
    <>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={9}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
      />
    </>
  );
};

export default Paginate;

import { useEffect, useState } from "react";
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";

const PER_PAGE = 5;

function TableProduct() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);
  useEffect(
    function () {
      async function fetchProducts() {
        const res = await fetch(
          `http://localhost:3000/products?_page=${currentPage}&_per_page=${PER_PAGE}`
        );
        const data = await res.json();
        setProducts(data.data);
        setNumPages(data.pages);
      }
      fetchProducts();
    },
    [currentPage]
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>
            <button
              onClick={() => setCurrentPage((curr) => curr - 1)}
              disabled={currentPage <= 1}
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentPage((curr) => curr + 1)}
              disabled={currentPage >= numPages}
            >
              Next
            </button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default TableProduct;

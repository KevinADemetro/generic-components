import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function TableProduct({ products }) {
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
    </Table>
  );
}

export default TableProduct;

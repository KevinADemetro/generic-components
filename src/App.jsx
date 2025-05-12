import TableProduct from "./components/TableProduct";

const products = [
  { id: 1, description: "Mouse" },
  { id: 2, description: "Teclado" },
  { id: 3, description: "Sabonete" },
  { id: 4, description: "Monitor" },
  { id: 5, description: "Cadeira" },
  { id: 6, description: "Câmera" },
  { id: 7, description: "Fone de ouvido" },
  { id: 8, description: "Notebook" },
  { id: 9, description: "Mesa digitalizadora" },
  { id: 10, description: "Caneta" },
  { id: 11, description: "Lâmpada" },
  { id: 12, description: "HD Externo" },
  { id: 13, description: "Livro" },
  { id: 14, description: "Celular" },
  { id: 15, description: "Roteador" },
];

function App() {
  return <TableProduct products={products} />;
}

export default App;

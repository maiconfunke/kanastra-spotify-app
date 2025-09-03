import { Link } from "react-router-dom";


export default function Menu() {
  return (
    <>
     <Link to="/" className="block hover:text-green-400">Home</Link>
      <Link to="/search" className="block hover:text-green-400">Buscar</Link>   
    </>
  );
}
import CartWidget from "./CartWidget/CartWidget"

const Navbar = () => {
   return (
 <nav>
    <h3> Logia Solution Technology SRL</h3>
    <div>
        <button>Celulares</button>
        <button>Notebooks</button>
        <button>Servicios</button>
    </div>
    <CartWidget />
 </nav>

   )

} 

export default Navbar


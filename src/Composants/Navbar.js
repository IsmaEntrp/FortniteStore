import { Link } from 'react-router-dom'
import './Navbar.css'
import {ListProduitContext} from '../Context/ContextApp'
import { useContext } from 'react'
function Navbar(props)
{
  
    const [[Panier, usePanier],,[FindProduct, useFindProduct]] = useContext(ListProduitContext)
    function HandleChangeSearch(e)
    {
        useFindProduct(e.target.value)
    }
    return(
        <div className="Navbar-container">
            <Link className="Navbar-productpage" to="/">
                <h3>Fortnite  </h3>
            </Link>
            <div className="Navbar-search-div">
                <input type='text' name="search" value={FindProduct} onChange={HandleChangeSearch}></input>
            {FindProduct.length>0 ? 
            <Link className="Navbar-productpage" to="/Productpage">
                <button >Search</button>
            </Link> : 
            <Link className="Navbar-productpage" to="/fortnite">
                <button >Search</button>
            </Link> 
            }   
            </div>
            
            <Link className="Navbar-productpage" to="/fortnite">
                <div className="Navbar-Panier">
                    <p>Store </p>
                </div>
            </Link>
            <Link className="Navbar-productpage" to="/Checkout">
                <div className="Navbar-Panier">
                    <p>Panier : {Panier.length}</p>
                </div>
            </Link>
            
        </div>
    )

}

export default Navbar
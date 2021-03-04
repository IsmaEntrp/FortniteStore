import './Chekoutpage.css'

import {ListProduitContext} from '../Context/ContextApp'
import { useContext } from 'react'
import Product from './Product'
import {Link} from 'react-router-dom'


function Chekoutpage()
{
    const [ [Panier, usePanier]]= useContext(ListProduitContext)
    function sommeapayer()
    {
        var somme = 0;
        for(var i=0; i<Panier.length; i++)
        {
            somme = somme + Panier[i].price
        }
        return somme
    }
    function ReloadPage()
    {
        
        window.location.href = "/";
    }
    return(
        <div className="Container-checkoutpage">
        <div className="Checkoutpage-subtotal">
            <p className="Checkoutpage-subtotal-total">Totale : {sommeapayer()}</p>
            
                <button className="Checkoutpage-subtotal-button" onClick={ReloadPage}>Valider et acheter</button>
            
        </div>
        <div>
            {Panier.map(product=>{
                        return(
                        <Product 
                        checkout
                        key={product.id}
                        id={product.id}
                        name ={product.name} 
                        price = {product.price}
                        img= {product.img}
                        enstock = {product.enstock}
                         />
                        )}
            )}
        </div>
        </div>
    )
}

export default Chekoutpage
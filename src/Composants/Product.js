import './Product.css'
import {ListProduitContext} from '../Context/ContextApp'
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Product(props)
{
    const [[Panier, usePanier]]=useContext(ListProduitContext)
    function titlecut(title, n )
    {
        var newtitle = title.substr(0,n) + '...';
        return newtitle
    }
    function AddPanier()
    {
        usePanier([...Panier, {name : props.name, 
            img: props.img, 
            enstock: props.enstock, 
            price: props.price,
            id: uuidv4()}])
    }
    function DeletetfomPanier()
    {
        var newPanier = [...Panier]
        for(var i =0; i< newPanier.length; i++)
        {
            if(newPanier[i].id == props.id)
            {
                newPanier.splice(i,1)
                break;
            }
        }
        usePanier(newPanier)
    }
    return(
        <div className={props.checkout ?"Product-container-chekout" :"Product-container" }>
        <img className={props.checkout ?"Product-img-chekout" :"Product-img" } src={props.img} alt={props.name}/>
        <p className={props.checkout ?"Product-title-chekout" :"Product-title" }> {props.name} </p>
        <p className={props.checkout ?"Product-enstock-chekout" :"Product-enstock" }>En stock : {props.enstock}</p>
        <p className= {props.checkout ?"Product-price-chekout" : "Product-price" }>{props.price} $</p>
        {props.checkout ? <></> : <p className="Product-description">{props.description}</p>}
        {props.checkout ? <button className="Product-button-buy-chekout" onClick={DeletetfomPanier}> Supprimer </button>
        : <button className="Product-button-buy" onClick={AddPanier}> Ajouter au panier </button>}
        
    </div>
    )

}

export default Product
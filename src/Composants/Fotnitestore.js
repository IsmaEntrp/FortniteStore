import { useEffect, useState, useReducer, useContext} from "react"
import './Fortnitestore.css'
import axios from 'axios'
import Product from './Product'
import {ListProduitContext} from '../Context/ContextApp'



export default function Fortnitestore()
{
    
   const [[],[listFortnite, uselistFortnite]] = useContext(ListProduitContext)
    const maxtaille = listFortnite.length
    const [debutpage, usedebutpage]= useState(0)
    function Pagesuivante()
    {
        if(debutpage < listFortnite.length -20 )
        {
            usedebutpage(debutpage+20)  ;
        }
    }
    function Pageprecedente()
    {
        if(debutpage != 0  )
        {
            usedebutpage(debutpage-20)  ;
        }
    }
    return(
        <div className="Fortnitestore-container"> 
        <div className="Fortnitestore-container-margin">
        <div className="Fortnitestore-container-affichage">
            {listFortnite.map((Fortniteproduit,index) =>{ 
            if(Fortniteproduit.images.showcase != null )
            {
                return (<Product 
                    key={Fortniteproduit.id}
                    id={Fortniteproduit.id}
                    name ={Fortniteproduit.name} 
                    price = {Fortniteproduit.minPlayers + 23}
                    img= {Fortniteproduit.images.showcase}
                    enstock = {Fortniteproduit.maxPlayers + 57}
                    description = {Fortniteproduit.description}/>) 
            }  
                
                })}
            </div>
            </div>
        </div>
    )
}
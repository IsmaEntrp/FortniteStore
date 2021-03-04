
import React, {useContext, useEffect, useState} from 'react'
import Product from './Product'
import './Productpage.css'
import {ListProduitContext} from '../Context/ContextApp'
const Productpage = ()=>
{
    const [,[listFortnite, useListFortnite],[FindProduct, useFindProduct]] = useContext(ListProduitContext)
    useEffect(()=>
    {
        return(HandletheEnd)
    },[])
    function HandletheEnd()
    {
        useFindProduct('')
    }
    return(
        <div className= "Productpage-container">
            {listFortnite.map(Fortniteproduit => {
            if(Fortniteproduit.images.showcase != null )
            {
                var search = Fortniteproduit.name
                
                var searchtarget = FindProduct
                if(search.toLowerCase().includes(searchtarget.toLowerCase()))
                {
                        return(
                        <Product 
                        key={Fortniteproduit.id}
                        id={Fortniteproduit.id}
                        name ={Fortniteproduit.name} 
                        price = {Fortniteproduit.minPlayers + 23}
                        img= {Fortniteproduit.images.showcase}
                        enstock = {Fortniteproduit.maxPlayers + 57}/>
                        
                        )}
                }
            }
            )}
        </div>
    )
}

export default Productpage
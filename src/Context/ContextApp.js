import React, {createContext, useEffect, useReducer, useState} from 'react'
import axios from 'axios'


export const ListProduitContext = createContext()



export   const ListProduitProvider = (props)=>
{
    const [listFortnite, useListFortnite] = useState([])
    const [Panier, usePanier] =useState([])
    const [FindProduct, useFindProduct] =useState('')

    var url ='https://fortnite-api.com/v1/playlists'
    useEffect(()=>
    {
        async function FetchData()
        {
            const request = await axios.get(url);
            const newdata = Object.values(request.data)
            useListFortnite(newdata[1])
           
            return request.data
        }

        FetchData()
        
        
    },[])

 

    return(
        <ListProduitContext.Provider value={[ [Panier, usePanier], [listFortnite, useListFortnite], [FindProduct, useFindProduct]  ]} >
            {props.children}
        </ListProduitContext.Provider>
        
    )
}


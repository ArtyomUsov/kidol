import React, { useEffect, useState } from 'react';
// import axios, {AxiosError} from 'axios'
// import { DItem } from '../date/models'

// export function useItems() {

//     const [Items, setItems] = useState<DItem[]>([])
//     const[Loading, setLoading] = useState(false)
//     const[error, setError] = useState('')

//   function addProduct(product: DItem) {
//     setItems(prev => [...prev, product])
//   }

//     async function fetchProducts() {
//       try{
//         setError('')
//         setLoading(true)
//         const response = await axios.get<DItem[]>('https://fakestoreapi.com/products?limit=5')
//         setItems(response.data)
//         setLoading(false)
//       } catch(e: unknown) {
//         const error = e as AxiosError
//         setLoading(false)
//         setError(error.message)
//       }
//     }

//     useEffect( () => {
//       fetchProducts()
//     }, [])
//   return { Items, error, Loading, addProduct }
// }

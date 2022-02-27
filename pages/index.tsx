import type { NextPage, InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/product/getAllProducts'



export async function getStaticProps(){
const products = await getAllProducts()
return {
  props:{
  products
},
revalidate: 4*60*60
}
}

const Home = ({products}:InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
    <div >
      {JSON.stringify(products)}
    </div>
  )
}

export default Home

import type { NextPage, InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/product/getAllProducts'
import { getConfig } from '@framework/api/config'
import { Layout } from "@components/common"



export async function getStaticProps(){
const config = getConfig()
const products = await getAllProducts(config)
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
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      {JSON.stringify(products)}
    </div>
  )
}

Home.Layout = Layout
export default Home

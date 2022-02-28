import { ProductConnection } from "../schema"
import {
  fetchApi,
  normalizeProduct,
  getAllProductsQueries
} from "../utils"
import { ApiConfig } from "@common/types/api"
import { Product } from "@common/types/product"


type ReturnType ={
    products:ProductConnection
}
const getAllProducts = async (config: ApiConfig): Promise<Product[]>=>{
    const {data} = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQueries
  })
    const products = data.products.edges.map(({ node: product }) => {
        return normalizeProduct(product)
        }) ?? []
    return products
}

export default getAllProducts
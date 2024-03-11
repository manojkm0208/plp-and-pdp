import { getProductData } from "@/API/apis";
import ProductPage from "@/Components/ProductDisplayPage/ProductPage";

export default async function PDP({params}){
    const { productId } = params;
    const data = await getProductData(productId);

    return (
        <div>
          <ProductPage product={data}/>
        </div>
    )
}
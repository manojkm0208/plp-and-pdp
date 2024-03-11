import { getData } from "@/API/apis";
import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";

export default async function Home() {
  const data = await getData();

  return (
      <div class="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {data?.map((item) => (
          <div class="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xs p-2">
            <Link href={`/product/${item?.id}`}>
              <ProductCard product={item} key={item?.id} />
            </Link>
          </div>
        ))}
      </div>
  )
}

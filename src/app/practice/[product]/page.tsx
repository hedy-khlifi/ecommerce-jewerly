import { Metadata } from "next"
type props = {
    params:Promise<{product:string}>
}
export const generateMetadata = async ({params}:props) => {
    const { product } = await params;
    return {
        title:  `${product}`
    }
}
async function page({ params }: props) {
    const {product} = await params
  return (
      <div>
          proudct
    </div>
  )
}

export default page
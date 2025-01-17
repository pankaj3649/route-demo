export default function ProductDetails({ params }: {params: {productId: string}}) {
    return<div>
        <h1>Products details of {params.productId}</h1>
    </div>
}
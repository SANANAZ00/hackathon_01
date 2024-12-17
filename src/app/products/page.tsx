interface Iproducts {
    title: string,
    price: string,
    id: number,
    rating?: string,
    old_price?: number
}

let product: Iproducts[] = {
{
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",

}

}

export default function Products() {
    return (
        <div>
            <h1>Products List</h1>
        </div>
    )
}
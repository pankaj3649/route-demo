interface Product {
    id: number,
    name: string,
    price: number
}
export default function Product(){
    let products:Product[] = 
    [{id: 1, name:"apple", price:120},
    {id: 2, name:"mango", price:90},
    {id: 3, name:"Banana", price:46},
]
    return <div>
        <h1>Products List</h1>
       <table  style={{ width: '100%', textAlign: 'left', padding: '10px' }}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
          { products.map((p,index) => 
            {
                return <tr key={index}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                        </tr>
            })
        }
        </tbody>
       </table>
    </div>
}
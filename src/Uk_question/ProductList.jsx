import { useState } from "react";
import { products } from "./products";



		const ProductList = () => {
const [filteredProducts, setFilteredProduct]=useState(products)
 function handleFilter(e){
    const value=e.target.value.toLowerCase()
    if(value.length>0){
    setFilteredProduct(products.filter(n=>n.product_name.toLowerCase().includes(value) || n.description.toLowerCase().includes(value)))
    }else{
        setFilteredProduct(products)
    }
 }
return (
	<div className="p-4 max-w-xl mx-auto">
		<h1 className="text-xl font-bold mb-4">Product List</h1>
			<input
			type="text"
			placeholder="Search products..."
			className="w-full p-2 border rounded mb-4"
            onChange={handleFilter}
			/>
			{filteredProducts.length > 0 ? (
		<ul className="space-y-3">
		{filteredProducts.map((product) => (
		<li
		key={product.product_id}
		className="p-3 border rounded shadow-sm"
		>
		<h2 className="font-semibold">{product.product_name}</h2>
		<p className="text-sm text-gray-600">{product.description}</p>
		<p className="font-medium">${product.price}</p>
		</li>
		))}
		</ul>
		) : (
		<p className="text-gray-500">No products found.</p>
		)}
	</div>
	);
};

export default ProductList;
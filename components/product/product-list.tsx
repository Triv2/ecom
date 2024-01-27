import ProductCard from "./product-card";


const products= [
  {
  image: "/landing/setup1.webp",
  title: "Product 1",
  category: "Category 1",
  store: "Store 1",
  price: "$1.00"
},
{
  image: "/landing/setup2.webp",
  title: "Product 2",
  category: "Category 2",
  store: "Store 3",
  price: "$3.00"
},
{
  image: "/landing/setup3.webp",
  title: "Product 3",
  category: "Category 3",
  store: "Store 2",
  price: "$5.00"
},
]

const ProductList = () => {
  return (
<section className="flex items-center justify-center flex-col gap-1 p-2">
    {products.map((product) => (
      <ProductCard
        key={product.title}
        image={product.image}
        title={product.title}
        category={product.category}
        store={product.store}
        price={product.price}
      />
    ))}
</section>
  );
}
export default ProductList;
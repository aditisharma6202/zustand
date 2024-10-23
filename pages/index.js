import ProductList from "../components/productList";

// pages/index.js
export default function Home({products}) {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <ProductList products={products} />
    </div>
  );
}
export async function getServerSideProps() {
    let products = [];
    let error = null;

    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        products = await response.json();
    } catch (err) {
        error = err.message;
    }

    return {
        props: {
            products,
            error,
        },
    };
}


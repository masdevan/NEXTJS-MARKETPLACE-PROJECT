import 'tailwindcss/tailwind.css';
import productAPI from '../../data/products';

export default function Page({ params }) {
  const product = productAPI.find((item) => item.slug === params.slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
  <>
  <img src={product.image} alt={product.title} width={'200px'} height={'120px'} className='object-cover'/>
  <h2>{product.title}</h2>
  <p>{product.description}</p>
  <p>Category: {product.category}</p>
  </>
  );
}
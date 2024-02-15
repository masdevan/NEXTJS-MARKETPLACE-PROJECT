import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductsAPI from '../data/products';

function Content() {
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 8;

// Index Calculation
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = ProductsAPI.slice(indexOfFirstProduct, indexOfLastProduct);
const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='max-w-6xl m-auto my-10'>
      <ul className='grid grid-cols-4 gap-5'>
        {currentProducts.map((item) => (
          <li key={item.id}>
            <Link href={`/product/${item.slug}`}>
                <div className="relative h-72 w-full">
                <Image
                src={item.image}
                alt={item.title}
                layout="fill" 
                objectFit="cover" 
                className='rounded-xl'
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
                />
                </div>
                <h2 className='font-bold text-xl mt-2'>{item.title}</h2>
                <p>{item.description}</p>
                <p className='text-blue-500'>Category: {item.category}</p>
            </Link>
          </li>
        ))}
      </ul>
      {/* Tombol paginasi */}
        {Array.from({ length: Math.ceil(ProductsAPI.length / productsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 mr-2 rounded-md ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {i + 1}
          </button>
        ))}
    </div>
  );
}

export default Content;
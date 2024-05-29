/** @format */

import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const fetchProducts = async function () {
		try {
			const res = await fetch('https://dummyjson.com/products?limit=100');
			const data = await res.json();
			if (data && data.products) {
				setProducts(data.products);
			}
		} catch (error) {
			console.error('Failed to fetch products:', error);
		}
	};
	useEffect(() => {
		fetchProducts();
	}, []);
	const selectPage = (currentPage) => {
		if (
			currentPage >= 1 &&
			currentPage <= products.length / 10 &&
			currentPage !== page
		) {
			setPage(currentPage);
		}
	};
	return (
		<>
			{products.length > 0 ? (
				<div className='products'>
					{products.slice(page * 10 - 10, page * 10).map((product) => (
						<span
							key={product.id}
							className='product'>
							<img
								src={product.thumbnail}
								alt={product.title}
							/>
							<span>{product.title}</span>
						</span>
					))}
				</div>
			) : (
				<p>Loading products...</p>
			)}
			{products.length > 0 && (
				<div className='pagination'>
					<span
						className={page > 1 ? '' : 'paginationDisable'}
						onClick={() => selectPage(page - 1)}>
						◀️
					</span>
					{[...Array(products.length / 10)].map((_, i) => {
						return (
							<span
								className={page === i + 1 ? 'pageIndicator' : ''}
								onClick={() => selectPage(i + 1)}
								key={i}>
								{i + 1}
							</span>
						);
					})}
					<span
						className={page < products.length / 10 ? '' : 'paginationDisable'}
						onClick={() => selectPage(page + 1)}>
						▶️
					</span>
				</div>
			)}
		</>
	);
}

export default App;

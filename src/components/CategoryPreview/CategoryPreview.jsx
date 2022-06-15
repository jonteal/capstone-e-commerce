import { Link } from 'react-router-dom';

import ProductCard from '../ProductCard/ProductCard';

import { CategoryContainer } from './category.styles';



const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryContainer>
            <h2>
                <Link className='title' to={title}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className='preview'>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </CategoryContainer>
    );
}

export default CategoryPreview;
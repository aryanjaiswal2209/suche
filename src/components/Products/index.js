import React from 'react';
import {ProductsContainer,ProductsHeading,ProductsWrapper,ProductCard,ProductImage,ProductInfo,ProductTitle,ProductDesc,ProductPrice,ProductButton} from './ProductsElements';
import { Button } from '../Button';

const Products = ({heading,data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {data.map((product,index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImage src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <Button primary='true'>{product.button}</Button>
                            </ProductInfo>
                        </ProductCard>
                    )
                } ) }
            </ProductsWrapper>
            
        </ProductsContainer>
        
            
        
    )
}

export default Products

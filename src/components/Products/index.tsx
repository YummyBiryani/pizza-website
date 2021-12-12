import React from 'react';
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductCard,
    ProductTitle,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductButton,
    ProductPrice
} from './ProductsElements';

type Prod = {
    img: string;
    alt: string;
    name: string;
    desc: string;
    price: string;
    button: string;
}

interface Props {
    heading: string;
    data: Prod[];
}

export const Products: React.FC<Props> = ({heading, data}) => {
        return (
            <ProductsContainer>
                <ProductsHeading>{heading}</ProductsHeading>
                <ProductWrapper>
                    {data.map((product, index) => {
                       return(
                       <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                       )
                    })}
                </ProductWrapper>
            </ProductsContainer>
        );
}
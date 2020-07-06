import React, { createContext, useState } from 'react';
import { dummyData } from '../Data/FakeData';

export const ProductContext = createContext(dummyData);

const ProductContextProvider = ({ children }) => {

    const [products] = useState(dummyData)

    return (
        <ProductContext.Provider
            value={{
                products: products
            }}>
            {children}
        </ProductContext.Provider>
    );
}
export default ProductContextProvider
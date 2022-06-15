import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categories: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // just ran the useEffect once to load in items. Do not uncomment and refresh
    // because it will attempt to load the items in again and we don't want that.

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, []);

    
    const value = {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>
            {children} 
        </CategoriesContext.Provider>
    );
};
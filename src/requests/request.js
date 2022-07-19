import { defaultBooksList } from '../Utils/utils';

export const getBooks = async () => {
    try{
        //here will go the request
        const books = defaultBooksList
        return books;

    }catch(e){
        console.error(`Error retrieving books: ${e}`);
    }
} 
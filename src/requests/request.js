import { defaultBooksList } from '../Utils/utils';

export const getBooks = async () => {
    try{
        //here will go the request

        // const url = https://example.com/getBooks;

        // const response = await fetch(url);

        // if(!response.ok || response.status !== 200){
        //     console.log(`status:${response.status}`);
        //     return null;
        // }

        // const {data} = await response.json();
        
        // return data;
        const books = defaultBooksList
        return books;

    }catch(e){
        console.error(`Error retrieving books: ${e}`);
    }
} 
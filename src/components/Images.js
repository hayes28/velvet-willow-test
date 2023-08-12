
import 'firebase/storage';
import { app } from '../config/firebase';
import React, { useState, useEffect } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';



function Images() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const storage = getStorage(app);

        const imageFolderPath = 'DnD-Images/Chairs';
        const imagesRef = ref(storage, imageFolderPath);

        listAll(imagesRef).then((result) => {
            const promises = result.items.map(imageRef => getDownloadURL(imageRef));
            Promise.all(promises).then(setImageUrls);
        });
    }, []);

    return (
        <div>
            {imageUrls.map((url, index) => (
                <img key={index} src={url} alt="Furniture" />
            ))}
        </div>
    );
}

export default Images;

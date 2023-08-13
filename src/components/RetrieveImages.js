// import firebase from 'firebase/app';
// import 'firebase/storage';
// import React, { useState, useEffect } from 'react';

// // Function to retrieve images
// const retrieveImages = () => {
//     // Get a reference to the storage service
//     const storage = firebase.storage();
//     const storageRef = storage.ref();

//     // Fetch the images
//     return storageRef.child('').listAll();
// };

// function ImageComponent() {
//     const [imageUrls, setImageUrls] = useState([]);

//     useEffect(() => {
//         retrieveImages().then((result) => {
//             Promise.all(result.items.map((imageRef) => imageRef.getDownloadURL()))
//                 .then((urls) => setImageUrls(urls));
//         });
//     }, []);

//     return (
//         <div>
//             {imageUrls.map((url, index) => <img key={index} src={url} alt="Description" />)}
//         </div>
//     );
// }

// export default ImageComponent;

import React, { useState } from 'react';

function MyComponent() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    // ...
}

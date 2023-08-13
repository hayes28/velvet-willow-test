import React from 'react';
import { Card } from 'antd';
import '../App.css'

const { Meta } = Card;

const cardStyle = {
    transition: '0.3s', // Smooth transition
    borderRadius: '10px', // Rounded corners
    width: '240px',
    height: '300px',
    margin: '10px',
    boxShadow: '5px 5px 20px rgba(0,0,0,0.3)', // Add a subtle shadow
    display: 'inline-block',
    verticalAlign: 'top',
};

const ImageCard = ({ imageSrc }) => (
    <Card
        style={cardStyle}
        cover={<img alt="example" src={imageSrc} />}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '5px 5px 20px rgba(0,0,0,0.3)')} // Adding shadow on hover
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')} // Removing shadow
    >
        <Meta title="Chair" description="www.instagram.com" />
    </Card>
);

export default ImageCard;

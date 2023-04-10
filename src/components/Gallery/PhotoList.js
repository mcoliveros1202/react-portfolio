import React, { useState } from 'react';

const PhotoList = ({ category }) => {

    const [photos] = useState([
        { name: 'Run Buddy', category: 'JavaScript', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'JS Quiz', category: 'JavaScript', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'PetPortal', category: 'group projects', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Reach Teach', category: 'group projects', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Photo Portfolio', category: 'React', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    className='img-thumbnail mx-1'
                    key={image.name}
                    />
                ))}
                </div>
        </div>
    )
}

export default PhotoList;
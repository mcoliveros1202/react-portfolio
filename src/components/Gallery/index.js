import React from 'react';
import PhotoList from './PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery ({ currentCategory }) {
    const {name, description} = currentCategory;

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{capitalizeFirstLetter(currentCategory.name)}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;
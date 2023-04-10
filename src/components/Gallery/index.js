import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/pet-portal.png";

function Gallery (props) {
    const currentCategory = {
        name: 'PetPortal',
        description: 'Beginning design of a portal for veternary use to track patience and provide patient-owner access to records.'
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{capitalizeFirstLetter(currentCategory.name)}</p>
            <div className='flex-row'>
                <img
                src={photo}
                alt='PetPortal'
                className='img-thumbnail mx-1'
                />
            </div>
        </section>
    );
}

export default Gallery;
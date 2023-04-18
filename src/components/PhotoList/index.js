import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
const [currentPhoto, setCurrentPhoto] = useState();
const [isModalOpen, setIsModalOpen] = useState(false);

    const [photos] = useState([
        { name: 'Run Buddy', category: 'JavaScript', description: 'Web-based application used to describe services provided by personal trainers to help prospective users to get in shape.' },
        { name: 'JS Quiz', category: 'JavaScript', description: 'A quiz to used to test users knowledge of JavaScript, keeping track of top-scoring users.' },
        { name: 'PetPortal', category: 'group projects', description: "Web-based application designed for veternary clinics to document patient visit and facilitate communication between clinic staff and paitents' families." },
        { name: 'Reach Teach', category: 'group projects', description: "Web-based application designed to facilitate communication between classroom teachers and parents." },
        { name: 'Photo Portfolio', category: 'React', description: 'Web-based application designed to display photos taken by client as a way to advertise their services.' },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    // define toggleModal for onClick in image
    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i})
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div>
            {/* allows modal to open when clicked and closed when button is clicked */}
            {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal}/>)}
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    onClick={() => toggleModal(image, i)}
                    className='img-thumbnail mx-1'
                    key={image.name}
                    />
                ))}
                </div>
        </div>
    )
}

export default PhotoList;
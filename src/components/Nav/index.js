import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        setContactSelected,
        contactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className='flex-row px-1'>
            <h2>
                <a href='/'>
                    <span role='img' aria-label='camera'></span>Portfolio
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    {/* About me */}
                    <li className='mx-2'>
                        <p>
                            <a href='#about' onClick={() => setContactSelected(false)}>About Me</a>
                        </p>
                    </li>
                    {/* Contact Form */}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {/* Categories */}
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                                }`}
                            key={category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
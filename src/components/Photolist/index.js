import React, {useState} from 'react' 
import Modal from '../Modal'; 
//import photo from '../../assets/small/commercial/0.jpg'; 

const PhotoList = ( {category}) => {

    //we want the modal to open when a user has clicked an image 
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [currentPhoto, setCurrentPhoto] = useState(); 

    const [photos] = useState ([
        {
            name: 'Offline Budget',
            category: 'portfolio',
            description: 'Created an App with Offline functionality',
          },
          {
            name: 'Budget App',
            category: 'portfolio',
            description: 'Created a budget App with user sign up and login page',
          },
          {
            name: 'Appcrown Website',
            category: 'portfolio',
            description: 'Created the AppCrown website',
          },
          {
            name: 'Foodies App',
            category: 'portfolio',
            description: 'Created a foodies app for Ingredients API',
          },
          {
            name: 'Quiz',
            category: 'portfolio',
            description: 'Quiz app for employee training',
          },
     
    ]); 

    const currentPhotos = photos.filter((photo) => photo.category === category); 

    const toggleModal = (image, i) => { 
        setCurrentPhoto ( {...image, index: i}); 
        setIsModalOpen(!isModalOpen); 
    }

    return (
        <div>
             {isModalOpen && (
                 <Modal onClose={toggleModal} currentPhoto = {currentPhoto} /> 
            )}

          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <img
                src={require(`../../assets/small/${category}/${i}.jpg`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                onClick= { () => toggleModal (image, i)}
                key={image.name}
              />
            ))}
          </div>
        </div>
    )
}

export default PhotoList; 
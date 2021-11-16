import { React } from 'react';

const Rocket = (props) => {
  // From the rockets state slice we only need {id, rocket_name, description, flickr_images}
  // flickr_images is an array of photos
  console.log('the props for rockect ', props);
  const { rocket } = props;
  const {
    id, rocket_name: rocketName, description, flickr_images: flickerImages,
  } = rocket;

  console.log('fliker images', flickerImages);
  //   console.log('fliker images', pro);
  //   console.log('fliker images', flickerImages);
  //   console.log('fliker images', flickerImages);
  return (
    <div>
      <img src={flickerImages[0]} alt="spaceship" />
      <h2>{rocketName}</h2>
      <p>{description}</p>
      <button id={id} type="button">
        Reserve Rocket
      </button>
    </div>
  );
};
export default Rocket;

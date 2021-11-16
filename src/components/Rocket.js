import { React } from 'react';

const Rocket = (props) => {
  // From the rockets state slice we only need {id, rocket_name, description, flickr_images}
  // flickr_images is an array of photos
  const { rocket } = props;
  const {
    id,
    rocket_name: rocketName,
    description,
    flickr_images: flickerImages,
  } = rocket;

  return (
    <div className="row p-3">
      <img
        className="img-fluid col-md-4"
        src={flickerImages[0]}
        alt="spaceship"
      />
      <div className="col-md-8 ps-3">
        <h2 className="fs-3">{rocketName}</h2>
        <p>{description}</p>
        <button className="btn btn-primary" id={id} type="button">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};
export default Rocket;

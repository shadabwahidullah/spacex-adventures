import { React } from 'react';
import { useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { reserveRocket, cancelReserveRocket } from '../../redux/RocketsReducer';

const Rocket = (props) => {
  // From the rockets state slice we only need {id, rocket_name, description, flickr_images}
  // flickr_images is an array of photos
  const { rocket } = props;
  const {
    id,
    rocket_name: rocketName,
    description,
    flickr_images: flickerImages,
    reserved,
  } = rocket;

  const dispatch = useDispatch();

  return (
    <div className="row p-3">
      <Carousel className="col-md-4 carousel-custom">
        {flickerImages.map((rocket) => (
          <Carousel.Item key={rocket}>
            <img className="img-fluid" src={rocket} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="col-md-8 ps-3">
        <h2 className="fs-3 mt-2">{rocketName}</h2>
        <p>
          {reserved && <span className="badge bg-success me-2">Reserved</span>}
          {description}
        </p>
        {reserved ? (
          <button
            className="btn btn-outline-secondary"
            id={id}
            type="button"
            onClick={() => {
              dispatch(cancelReserveRocket(id));
            }}
          >
            Cancel Reserve
          </button>
        ) : (
          <button
            className="btn btn-primary"
            id={id}
            type="button"
            onClick={() => {
              dispatch(reserveRocket(id));
            }}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};
export default Rocket;

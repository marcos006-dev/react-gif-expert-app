// import PropTypes from 'prop-types'

const GifGridItem = ({ title, imagenurl }) => {
  return (
    <div className="card animate__animated animate__backInLeft">
      <img src={imagenurl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

// GifGridItem.propTypes = {

// }

export default GifGridItem;

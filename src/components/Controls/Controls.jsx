import PropTypes from 'prop-types';
import Button from './Controls.styled';

const Controls = ({ name, controlClick })=>{
    return (
        <Button
            name={name}
            type='button'
            onClick={controlClick}
        >
            {name}
        </Button>
    );
}

Controls.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Controls;
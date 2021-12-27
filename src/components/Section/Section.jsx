import Proptypes from 'prop-types';
import {Box, Header } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <Box >
            <Header>{title}</Header>
            {children}
        </Box>
    )
};

Section.propTypes = {
    title: Proptypes.string,
};

export default Section;
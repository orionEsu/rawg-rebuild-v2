import {  Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { iconMap } from '../data/iconMap';

const CardIcons = ({ platform }) => {
	return platform.map((el) => (
		<Icon
			as={iconMap[el.slug]}
			key={el.id}
		/>
	));
};

CardIcons.propTypes = {
	platform: PropTypes.array,
};

export default CardIcons;

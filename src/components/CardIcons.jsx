import {  Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { AiFillWindows, AiFillApple, AiFillAndroid } from 'react-icons/ai';
import {
	BsGlobe,
	BsPlaystation,
	BsXbox,
	BsNintendoSwitch,
} from 'react-icons/bs';
import { DiLinux } from 'react-icons/di';

const CardIcons = ({ platform }) => {
	const iconMap = {
		pc: AiFillWindows,
		web: BsGlobe,
		playstation: BsPlaystation,
		xbox: BsXbox,
		nintendo: BsNintendoSwitch,
		linux: DiLinux,
		mac: AiFillApple,
		android: AiFillAndroid,
	};

	return platform.map((el) => (
		<Icon
			as={iconMap[el.slug]}
			key={el.id}
		/>
	));
};

CardIcons.propTypes = {
	platform: PropTypes.object,
};
export default CardIcons;

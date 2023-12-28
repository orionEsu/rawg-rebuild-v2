import { Icon, Tooltip } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { iconMap } from '../data/iconMap';

type CardIconsProps = {
	platform: {
		id: number;
		slug: string;
		name: string;
	}[];
};

const CardIcons = ({ platform }: CardIconsProps) => {
	return platform?.map((el) => (
		<Tooltip
			hasArrow
			label={el.name}
			key={el.id}
			fontSize={'sm'}
			placement='top'
		>
			<span
				style={{
					width: '1em',
					height: '1em',
					margin: 0,
				}}
			>
				<Icon
					as={iconMap[el.slug]}
					sx={{
						marginInlineStart: ' 0 !important',
					}}
				/>
			</span>
		</Tooltip>
	));
};

CardIcons.propTypes = {
	platform: PropTypes.array,
};

export default CardIcons;

/* eslint-disable react/prop-types */
import { Box, Heading } from '@chakra-ui/react';
import ExpandableText from './ExpandableText';

const GameHeading = ({ data }) => {
	return (
		<>
			<Box>
				<Heading
					fontSize={'70px'}
					color={'gray.50'}
				>
					{data?.seo_h1}
				</Heading>
			</Box>

			<ExpandableText>{data?.description.slice(3, -4)}</ExpandableText>
		</>
	);
};

export default GameHeading;

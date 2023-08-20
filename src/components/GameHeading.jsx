/* eslint-disable react/prop-types */
import { Box, Heading } from '@chakra-ui/react';
import ExpandableText from './ExpandableText';
import { useLocation } from 'react-router-dom';
import filterSpecialCharacters from '../services/filterSpecialCharacters';

const GameHeading = ({ data }) => {
	const { pathname } = useLocation();
	const year = new Date().getFullYear();
	if (data)
		if (pathname === '/') {
			data = {
				seo_h1: 'New and trending',
				description: '<p>Based on player counts and release date</p>',
			};
		}
	if (pathname === '/games') {
		data = {
			seo_h1: 'All Games',
			description: '',
		};
	}
	if (pathname === '/last-30-days') {
		data = {
			seo_h1: 'Last 30 Days',
			description: '',
		};
	}

	if (pathname === '/this-week') {
		data = {
			seo_h1: 'This Week',
			description: '',
		};
	}

	if (pathname === '/next-week') {
		data = {
			seo_h1: 'Next Week',
			description: '',
		};
	}

	if (pathname === '/best-of-the-year') {
		data = {
			seo_h1: `Games of ${year}`,
			description: '',
		};
	}

	if (pathname === '/top-of-2022') {
		data = {
			seo_h1: `Popular in ${year - 1}`,
			description: '',
		};
	}

	pathname === '/'
		? document.title
		: (document.title = ` ${data?.seo_h1 && data?.seo_h1} ▫ RAWG`);

	return (
		<>
			<Box>
				<Heading
					size={{ base: '3xl', md: '4xl' }}
					color={'gray.50'}
					mb={4}
					textTransform={'capitalize'}
					fontFamily={'orbitron'}
				>
					{data?.seo_h1.includes('New and')
						? data?.seo_h1.replace('New and', '')
						: data?.seo_h1}
				</Heading>
			</Box>

			<ExpandableText>
				{data?.description &&
					filterSpecialCharacters(data?.description)}
			</ExpandableText>
		</>
	);
};

export default GameHeading;

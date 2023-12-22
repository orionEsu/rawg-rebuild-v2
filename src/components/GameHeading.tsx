/* eslint-disable react/prop-types */
import { Box, Heading } from '@chakra-ui/react';
import ExpandableText from './ExpandableText';
import { useLocation, useParams } from 'react-router-dom';
import filterSpecialCharacters from '../services/filterSpecialCharacters';
import { GameHeadingProps } from '../types';

const GameHeading = ({ heading }: { heading: GameHeadingProps }) => {
	const { pathname } = useLocation();
	const { type } = useParams();
	const year = new Date().getFullYear();
	if (heading.title)
		if (pathname === '/') {
			(heading.title = 'New and trending'),
				(heading.description =
					'<p>Based on player counts and release date</p>');
		}
	if (pathname === '/games') {
		heading.title = 'All Games';
		heading.description = '';
	}
	if (pathname === '/last-30-days') {
		heading.title = 'Last 30 Days';
		heading.description = '';
	}

	if (pathname === '/this-week') {
		heading.title = 'This Week';
		heading.description = '';
	}

	if (pathname === '/next-week') {
		heading.title = 'Next Week';
		heading.description = '';
	}

	if (pathname === '/best-of-the-year') {
		heading.title = `Games of ${year}`;
		heading.description = '';
	}

	if (pathname === '/top-of-2022') {
		heading.title = `Popular in ${year - 1}`;
		heading.description = '';
	}

	pathname === '/'
		? 'RAWG ▫ Discover Video Games'
		: (document.title = ` ${heading?.title && heading?.title} ▫ RAWG`);

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
					{heading?.title && type}{' '}

					{heading.title && heading?.title.includes('New and')
						? heading?.title.replace('New and', '')
						: heading?.title}
				</Heading>
			</Box>

			<ExpandableText>
				{heading?.description &&
					filterSpecialCharacters(heading?.description)}
			</ExpandableText>
		</>
	);
};

export default GameHeading;

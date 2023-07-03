/* eslint-disable react/prop-types */
import { Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

const ExpandableText = ({ children }) => {
	const [expanded, setExpanded] = useState(false);
	const limit = 300;

	if (!children) return;
	if (children.length <= limit) return <Text>{children}</Text>;

	const summary = expanded
		? children
		: children.substring(0, limit) + ' ....';
	return (
		<Text>
			{summary}

			<Button
				display={expanded ? 'none' : 'inline'}
				size='xs'
				marginLeft={1}
				fontWeight='bold'
				// colorScheme='yellow'
				backgroundColor={'gray.50'}
				color={'gray.900'}
				onClick={() => setExpanded(!expanded)}
			>
				read more
			</Button>
		</Text>
	);
};

export default ExpandableText;

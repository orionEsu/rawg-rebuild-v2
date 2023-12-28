import { Text, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ExpandableText = ({ description }: { description: string }) => {
	const [expanded, setExpanded] = useState(false);
	const pathname = useParams();

	useEffect(() => {
		setExpanded(false);
	}, [pathname]);

	const limit = 300;
	if (!description) return;
	if (description.length <= limit) return <Text>{description}</Text>;
	const summary = expanded
		? description
		: description.substring(0, limit) + '....';
	return (
		<>
			{summary}

			<Button
				size='xs'
				marginLeft={1}
				fontWeight='bold'
				backgroundColor={'gray.50'}
				transition={'all 0.2s ease'}
				color={'gray.900'}
				onClick={() => setExpanded(!expanded)}
			>
				{expanded ? 'show less' : 'read more'}
			</Button>
		</>
	);
};

export default ExpandableText;

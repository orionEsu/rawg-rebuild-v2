import { Card, CardBody } from '@chakra-ui/react';
import { Skeleton, SkeletonText } from '@chakra-ui/react';

const CardSkeleton = () => {
	return (
		<Card>
			<Skeleton height={'220px'} />
			<CardBody>
				<SkeletonText
					noOfLines={3}
					spacing={2}
					skeletonHeight={'4'}
				/>
			</CardBody>
		</Card>
	);
};

export default CardSkeleton;

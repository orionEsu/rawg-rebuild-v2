import { Badge } from '@chakra-ui/react';

type CriticScoreProps = {
	score: number;
};

const CriticScore = ({ score }: CriticScoreProps) => {
	let color = score > 70 ? "#6dc849" : score > 60 ? "yellow" : "white";

	return (
		<Badge
			color={color}
			px={2}
			py={1}
			fontWeight={"900"}
			fontSize={"md"}
			borderRadius={5}
		>
			{score || "NR"}
		</Badge>
	);
};

export default CriticScore;

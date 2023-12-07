/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const DisplayLinks = ({ data }) => {
	return (
		<>
			{data?.map((el, index) => (
				<>
					<Link
						key={el.id}
						to={`/games/${el.slug}/details`}
						className='suggested__games-link'
					>
						{el.name}
					</Link>
					{data?.length !== index + 1 && ', '}
				</>
			))}
		</>
	);
};

export default DisplayLinks;

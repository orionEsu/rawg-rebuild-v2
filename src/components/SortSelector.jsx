import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import PropTypes from 'prop-types';

const SortSelector = ({ onSort, gameQuery }) => {
	const sortOrders = [
		{ value: '', label: 'Relevance' },
		{ value: '-name', label: 'Name' },
		{ value: '-released', label: 'Released' },
		{ value: '-added', label: 'Added' },
		{ value: '-rating', label: 'Rating' },
		{ value: '-metacritic', label: 'Metacritic' },
	];

	const currentOrder = sortOrders.find((el) => el.value === gameQuery?.orderedValue);

	return (
		<Menu>
			<MenuButton
				borderRadius='md'
				borderWidth='1px'
				as={Button}
				rightIcon={<BsChevronDown />}
			>
				Order By: {currentOrder?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						key={order.value}
                        value={order.value}
						onClick={() => onSort(order.value)}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

SortSelector.propTypes = {
	onSort: PropTypes.func,
	gameQuery: PropTypes.object,
};

export default SortSelector;

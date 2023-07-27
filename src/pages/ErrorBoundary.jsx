import { useRouteError } from 'react-router-dom';
import { isRouteErrorResponse } from 'react-router-dom';

const ErrorBoundary = () => {
	const error = useRouteError();
	console.log(error);

	if (!isRouteErrorResponse(error)) return;
	return (
		<div>
			{isRouteErrorResponse(error) ? 'invalid page' : 'thrown error'}
		</div>
	);
};

export default ErrorBoundary;

import { useQuery } from '@tanstack/react-query';

const fetchUser = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	return await response.json();
};

export const useUserQuery = () => {
	return useQuery({ queryKey: ['user'], queryFn: fetchUser });
};

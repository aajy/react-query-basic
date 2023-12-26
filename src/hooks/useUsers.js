import { useQuery } from '@tanstack/react-query';

const fetchUser = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	return await response.json();
};

export const useUserQuery = () => {
	return useQuery({
		queryKey: ['user'],
		queryFn: fetchUser,
		refetchOnWindowFocus: false, //다른 브라우저탭 이동했따가 다시 넘어왔을 때 refetching안함
		refetchOnMount: false, //재마운트시 refetching안함
		gcTime: 1000 * 5,
	});
};

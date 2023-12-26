import { useQuery } from '@tanstack/react-query';
export default function UserInfo() {
	const fetchUser = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		return await response.json();
	};

	//useQuery(queryKey, fetch func);
	// queryKey : react-query로 관리할 각 비동기 데이터 구분용도의 키
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryKey: ['users'],
		queryFn: fetchUser,
	});
	//똑같은 데이터인지판별 시 배열로 판별하는 것이 편하므로 배열 형태로.
	return (
		<div className='UserInfo'>
			<h1>User Infomation</h1>
			{isLoading && <p>is loading...</p>}
			{isSuccess && data.map((user, idx) => <h2 key={user.id}>{user.name}</h2>)}
		</div>
	);
}

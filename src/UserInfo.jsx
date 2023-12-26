import { useUserQuery } from './hooks/useUsers';

export default function UserInfo() {
	const result = useUserQuery();
	console.log('result: ', result);
	return (
		<div className='UserInfo'>
			<h1>User Infomation</h1>
			{result.isLoading && <p>is loading...</p>}
			{result.isSuccess &&
				result.data.map((user, idx) => <h2 key={user.id}>{user.name}</h2>)}
		</div>
	);
}

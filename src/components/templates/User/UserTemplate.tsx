import { UserProps } from 'types/userProps';
import { UserCard } from '../../orginisms/User/UserCard';

export const UserTemplate = ({ user }: UserProps) => (
	<div>
		<UserCard user={user} />
	</div>
);

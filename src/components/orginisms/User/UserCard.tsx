import { UserProps } from 'types/userProps';
import { UserForm } from '../../molecules/User/UserForm';

export const UserCard = ({ user }: UserProps) => (
	<div>
		<UserForm user={user} />
	</div>
);

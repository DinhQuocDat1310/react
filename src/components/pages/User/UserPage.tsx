import React from 'react';
import { UserTemplate } from '../../templates/User/UserTemplate';
import { UserProps } from 'types/userProps';

export default function UserPage({ user }: UserProps) {
	return <UserTemplate user={user} />;
}

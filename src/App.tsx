import { UserProps } from 'types/userProps';
import './App.css';
import UserPage from './components/pages/User/UserPage';

const UserData: UserProps = {
	user: {
		name: '',
		email: '',
		age: 18,
	},
};

export default function App() {
	return <UserPage user={UserData.user}></UserPage>;
}

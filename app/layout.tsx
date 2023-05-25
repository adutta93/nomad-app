import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import AuthModal from './components/modals/AuthModal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Airbnb',
	description: 'Your travel partner',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<ClientOnly>
					<Navbar />
					<AuthModal actionLabel='Submit' isOpen title='Login Modal' />
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}

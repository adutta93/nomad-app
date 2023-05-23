import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Airbnb',
	description: 'Your travel partner',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

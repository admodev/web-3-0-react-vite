import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const NavbarItem = ({ title, classProps }) => {
	return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
}

const Navbar = () => {
	return (
		<nav className='w-full flex md:justify-center justify-between items-center p-4'>
			<div className='md:flex-[0.5] flex-initial justify-center items-center'>
				<ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
					{['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
						<NavbarItem title={item} key={index} />
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar

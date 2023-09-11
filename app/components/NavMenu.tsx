import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const NavMenu: FC<Props> = ({}) => {
	return (
		<nav className="flex flex-row bg-blue-600 text-white h-18 justify-between items-center p-4">
			<Link href={"/"}>
				<Image src="/logo.svg" width={216} height={30} alt="NextSpace Logo" />
			</Link>
			<ul className="flex list-none mr-4">
				<li className="h-18 flex items-center px-1">
					<Link href={"/about"}>About</Link>
				</li>
				<li className="h-18 flex items-center px-1">
					<Link href={"/blog"}>Blog</Link>
				</li>
				<li className="h-18 flex items-center px-1">
					<Link href={"/users"}>Utenti</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavMenu;

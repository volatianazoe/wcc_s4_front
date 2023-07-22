import { PropsWithChildren } from "react";
import { IconSearch } from "./Icon";
import { Button } from "./Button";

export function Header({}: HeaderProps) {
    return (
        <header className="px-12 py-5 flex justify-between items-center fixed top-0 left-0 w-full">
            <h1 className="text-2xl">Fode</h1>
            <nav className="flex gap-5 text-gray-500">
                <IconSearch />
                <ul className="flex gap-5">
                    <li>Why Foodie</li>
                    <li className="active text-black">About</li>
                    <li>Menu</li>
                </ul>
            </nav>
            <div className="flex gap-3">
                <Button variant="outline">Sign in</Button>
                <Button>Login</Button>
            </div>
        </header>
    );
}

type HeaderProps = PropsWithChildren<{}>;

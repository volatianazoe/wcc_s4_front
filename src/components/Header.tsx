import { PropsWithChildren, useState } from "react";
import { IconClose, IconMenu, IconSearch } from "./Icon";
import { Button } from "./Button";
import classNames from "classnames";

export function Header({}: HeaderProps) {
    const [open, setOpen] = useState(false);

    return (
        <header className="md:px-12 px-4 py-5 md:bg-transparent bg-white flex justify-between items-center fixed top-0 left-0 w-full z-50">
            <h1 className="text-2xl">Fode</h1>
            <nav
                className={classNames(
                    "md:static md:flex md:h-auto md:w-auto grid justify-center items-center gap-5 text-gray-500 bg-white fixed top-0 w-screen h-screen transition-all",
                    open ? "left-0" : "left-full"
                )}
                style={{ zIndex: 1000 }}
            >
                <span className="cursor-pointer md:block hidden">
                    <IconSearch />
                </span>
                <ul className="md:flex md:gap-5 grid gap-10">
                    <li>
                        <a href="#">Why Foodie</a>
                    </li>
                    <li className="active text-black">
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                </ul>
                <span
                    className="md:hidden absolute top-6 right-6"
                    onClick={() => setOpen(false)}
                >
                    <IconClose />
                </span>
            </nav>
            <div className="flex items-center gap-3">
                <Button variant="outline">Sign in</Button>
                <Button>Login</Button>
                <span
                    className="md:hidden"
                    onClick={() => {
                        setOpen(true);
                        console.log("ok");
                    }}
                >
                    <IconMenu />
                </span>
            </div>
        </header>
    );
}

type HeaderProps = PropsWithChildren<{}>;

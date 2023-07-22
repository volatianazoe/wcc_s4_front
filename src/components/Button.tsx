import { PropsWithChildren } from "react";
import classnames from "classnames";

export function Button({ children, variant = "filled" }: ButtonProps) {
    return (
        <button
            className={classnames(
                "px-5 py-1 rounded-3xl transition-colors",
                variant == "filled"
                    ? "bg-amber-200 text-black border border-black hover:text-amber-200 hover:bg-black"
                    : "hover:text-amber-100 text-white border border-amber-200 bg-black"
            )}
        >
            {children}
        </button>
    );
}

type ButtonProps = PropsWithChildren<{
    variant?: "outline" | "filled";
}>;

import { PropsWithChildren } from "react";

export function Shape({}: ShapeProps) {
    return (
        <div className="absolute top-0 right-0 h-full -z-50">
            <div className="md:block hidden absolute top-1/4 left-10 w-52 h-52">
                <img
                    src="/1.png"
                    className="h-full w-full object-contain"
                    alt=""
                />
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 500 500"
            >
                <path
                    d="M317.696 67.861q199.511-172.283 199.511 0v187.172q0 172.283-199.511 172.283H100.943q-199.511 0 0-172.283Z"
                    style={{
                        stroke: "#000",
                        fill: "#121212",
                    }}
                />
                <path
                    d="M348.24 111.487q104.891-48.611 104.891 0v77.636q0 48.611-104.891 48.611H180.718q-104.891 0 0-48.611Z"
                    style={{
                        stroke: "#000",
                        fill: "#121212",
                    }}
                    transform="rotate(.436 -38839.941 -88031.632) skewX(71.669)"
                />
                <path
                    d="M135.503 334.375h423.791v174.193H135.503z"
                    style={{
                        stroke: "#000",
                        paintOrder: "stroke",
                        fill: "#121212",
                    }}
                />
                <path
                    d="M489.149 313.916h47.348v42.087h-47.348z"
                    style={{
                        stroke: "#000",
                        fill: "#121212",
                    }}
                />
            </svg>
        </div>
    );
}

type ShapeProps = PropsWithChildren<{}>;

import { PropsWithChildren } from "react";
import { Button } from "./Button";
import { IconCart } from "./Icon";

export function Content({}: ContentProps) {
    return (
        <section className="p-20 md:px-12 px-4 lg:min-h-screen grid">
            <div className="grid lg:grid-cols-2 lg:gap-4 gap-10 items-center lg:pl-12">
                <div className="grid gap-3">
                    <div className="">
                        <h2 className="text-3xl text-gray-600">
                            Italian pizza
                        </h2>
                        <h2 className="text-3xl font-bold">
                            With special saurce
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Doloribus
                            <span className="font-bold">Fode.</span>
                        </p>
                    </div>
                    <div className="flex mt-5 gap-8">
                        <div className="grid gap-2">
                            <span className="line-through text-gray-500">
                                $79.20
                            </span>
                            <span className="text-xl">$70.00</span>
                        </div>
                        <div className="">
                            <Button variant="outline">
                                <div className="flex gap-2 py-1">
                                    <span className="bg-amber-200 text-black w-7 h-7 flex justify-center items-center rounded-full">
                                        <IconCart />
                                    </span>
                                    <span>Buy now</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 mt-7">
                        <div className="relative flex justify-center items-center w-16 h-16">
                            <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-full bg-amber-200"></div>
                            <img
                                src="/chef.png"
                                className="w-full h-full object-contain"
                                alt=""
                            />
                        </div>
                        <div className="relative p-2">
                            <p className="text-gray-500">
                                Chef's Recommandation
                            </p>
                            <p>see the menu type</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-96 lg:h-full">
                    <div
                        className="p-3 absolute bottom-7 right-7 border border-dashed border-gray-400 rounded-lg"
                        style={{ backgroundColor: "#121212" }}
                    >
                        <div className="flex justify-between items-center py-2">
                            <div className="text-amber-200">
                                Discount coupon
                            </div>
                            <div className="flex gap-2 text-white text-xs">
                                <span>Prev</span>
                                <span>Next</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-3 border-t-2 border-dashed border-gray-400 rounded-lg">
                            <img
                                src="/pizza.jpeg"
                                className="w-10 h-10 rounded-full"
                            />
                            <span className="text-white">Mexico Pizza</span>
                            <div className="grid">
                                <span className="text-gray-500 line-through text-sm">
                                    $12.00
                                </span>
                                <span className="text-amber-200">$8.00</span>
                            </div>
                            <Button variant="outline">
                                <div className="flex gap-2 py-1">
                                    <span className="bg-amber-200 text-black w-7 h-7 flex justify-center items-center rounded-full">
                                        <IconCart />
                                    </span>
                                    <span>Buy now</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

type ContentProps = PropsWithChildren<{}>;

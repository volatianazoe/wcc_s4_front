import { PropsWithChildren } from "react";
import { Button } from "./Button";
import { IconCart } from "./Icon";

export function Content({}: ContentProps) {
    return (
        <section className="p-20 px-12">
            <div className="grid grid-cols-2 items-center pl-12 min-h-screen">
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
                <div className="relative">
                    <div className="absolute bottom-0 right-0 border border-dashed border-white">
                        <div className="flex justify-between">
                            <div className="text-amber-200">Discount coupon</div>
                            <div className="flex gap-2">
                                <span>Prev</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

type ContentProps = PropsWithChildren<{}>;

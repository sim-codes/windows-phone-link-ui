"use client";

import {
    PhoneIcon,
    BackspaceIcon
  } from '@heroicons/react/24/outline';
import { useState } from 'react';
import clsx from 'clsx';

export default function DialButtons(){
    const [number, setNumber] = useState<string>("");
    return (
        <div className="flex flex-col justify-center gap-2 mt-5 items-center mb-10">
            {/* Input div */}
            <input type="text" className="my-5 font-bold text-center text-white text-4xl bg-transparent w-2/3 focus:outline-none" value={number} readOnly/>
            
                <div className="text-white grid gap-1 grid-flow-col grid-cols-3">
                    <button onClick={() => getNumber("1")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        1
                    </button>
                    <button onClick={() => getNumber("2")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        2
                        <p className="text-xs text-gray-400">
                            ABC
                        </p>
                    </button>
                    <button onClick={() => getNumber("3")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        3
                        <p className="text-xs text-gray-400">
                            DEF
                        </p>
                    </button>
                </div>
                <div className="text-white grid gap-1 grid-flow-col grid-cols-3">
                    <button onClick={() => getNumber("4")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        4
                        <p className="text-xs text-gray-400">
                            GHI
                        </p>
                    </button>
                    <button onClick={() => getNumber("5")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        5
                        <p className="text-xs text-gray-400">
                            JKL
                        </p>
                    </button>
                    <button onClick={() => getNumber("6")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        6
                        <p className="text-xs text-gray-400">
                            MNO
                        </p>
                    </button>
                </div>
                <div className="text-white grid gap-1 grid-flow-col grid-cols-3">
                    <button onClick={() => getNumber("7")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        7
                        <p className="text-xs text-gray-400">
                            PQRS
                        </p>
                    </button>
                    <button onClick={() => getNumber("8")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        8
                        <p className="text-xs text-gray-400">
                            TUV
                        </p>
                    </button>
                    <button onClick={() => getNumber("9")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        9
                        <p className="text-xs text-gray-400">
                            WXYZ
                        </p>
                    </button>
                </div>
                <div className="text-white grid gap-1 grid-flow-col grid-cols-3">
                    <button onClick={() => getNumber("*")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        *
                    </button>
                    <button onClick={() => getNumber("0")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                            0
                        <p className="text-xs text-gray-400">
                            +
                        </p>
                    </button>
                    <button onClick={() => getNumber("#")}
                    className="bg-[#202021] w-20 h-14 cursor-default hover:bg-[#393b3e]">
                        #
                    </button>
                </div>

                <div className="grid grid-flow-col gap-5 grid-cols-3 align-middle place-items-center mt-10">
                    <button className={clsx("w-14 h-14 cursor-default rounded-full flex justify-center items-center",
                        number.length === 0? "bg-[#202021] col-span-3 justify-self-center":  "bg-green-500 col-span-2 justify-self-end",
                    )}>
                        <PhoneIcon className="w-6 text-white" />
                    </button>
                    {number.length > 0 && (
                        <button onClick={deleteNumber}
                        className="bg-[#202021] w-14 h-14 cursor-default rounded-full flex justify-center items-center justify-self-center">
                            <BackspaceIcon className="w-6 text-white" />
                        </button>
                    )}
                </div>
        </div>
    )

    function getNumber(num: string){
        if(number.length > 10){
            return;
        }
        setNumber(number + '' + num);
    }

    function deleteNumber(){
        if(number.length === 0){
            return;
        }
        setNumber(number.slice(0, -1));
    }
}

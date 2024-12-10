"use client";

import { CloseSVG } from "../Input/close";
import { Text, Heading, Img, Button, Input } from "./..";
import Link from "next/link";
import React from "react";

export default function Header({...props}) {
    const [searchBarValue, setSearchBarValue] = React.useState("");
    
    return (
      <header
          {...props}
            className={`${props.className} flex flex-col items-center border-gray-200 border-b border-solid bg-white`}
        >
            <div className="container-xs mt-7 flex flex-col items-center gap-8 1g:px-5 md:px-5">
                <div className="flex items-start justify-between gap-5 self-stretch md: flex-col">
                    <div className="flex w-[58%] items-start justify-center gap-2.5 self-center md:w-full md:flex-col">
                        <Img
                            src="img_header_logo.png"
                            width={132}
                            height={64}
                            alt="Header Logo"
                            className="h-[64px] w-[132px] self-end object-contain" />
                        <Input
                            color="gray_50_02"
                            size="xs"
                            shape="round"
                            name="Search Field"
                            placeholder={`Rechercher un produit`}
                            value={searchBarValue}
                            onChange={(e) => setSearchBarValue(e.target.value)}
                            suffix={searchBarValue?.length > 0 ? (
                                <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillcolor="#003348ff" />
                        ) : (
                        <Img
                            src="img_search.svg"
                            width={24}
                            height={24}
                            alt="Search"
                            className="h-[24px] w-[24px] object-contain" 
                        />
                    )
                }
                className="gap-4 rounded-md px-3.5 text-blue_gray-500"
                />
            </div>
            <div className="flex w-[34%] items-center justify-center md:w-full sm:flex-col">
                <div className="flex items-center gap-2">
                    <Link href="#">
                        <Img src="ing lightbulb_01.svg" width={18} height={18} alt="Inspiration Icon" className="h- [18px]" />
                    </Link>
                        <Text as="p" className="font-poppins text-[14px] font-medium text-blue_gray-800">
                            Inspirations
                        </Text>
                </div>
                <div className="ml-3 flex flex-1 items-center justify-center gap-2 px-2.5 py-3 sm:ml-0 sm:self-stretch">
                    <div className="flex flex-1 justify-center gap-2">
                        <Link href="#">
                            <Img src="img_heart.svg" width={20} height={20} alt="Favorites Icon" className="h-[20px]" />
                        </Link>
                        <Text as="p" className="font-poppins text-[14px] font-medium text-blue_gray-800">
                            Mes favoris
                        </Text>
                    </div>
                    <Heading
                        size="textxs"
                        as="p"
                        className="flex items-center justify-center rounded-1g bg-blue_gray-100_66 px-1.5 font-poppins text [10px] font-medium text-blue gray-900_82"
                    >
                        24
                    </Heading>
                </div>
                <Button
                    color="light_blue_700"
                    size="lg"
                    leftIcon={
                        <Img
                            src="ing shoppingcart01.svg"
                            width={20}
                            height={20}
                            alt="Shopping-cart-01"
                            className="h-[20px] w-[20px] object-contain" 
                            />
                        }   
                        className="ml-3 min-w-[184px] gap-2 rounded-md border border-solid border-light_blue-800 px-3.5 font-poppins font-medium sm:ml-8"
                    >
                        Panier
                    </Button>
                    <div className="ml-[18px] h-[44px] w-[44px] rounded-[22px] bg-blue_gray-50 sm:ml-0" />
                    <div className="ml-[18px] flex items-center gap-2 sm:ml-0">
                        <Text as="p" className="font-montserrat text-[14px] font-medium text-blue_gray-900_01">
                            FR
                        </Text>
                        <Img
                            src="img_arrow_down_blue_gray_900_01.svg"
                            width={10}
                            height={10}
                            alt="Dropdown Arrow"
                            className="h-[10px]" />
                    </div>
                </div>
            </div>
            <ul className="flex items-start gap-[38px] md:flex-col">
                <li>
                    <Link href="#">
                        <div className="flex flex-col items-center justify-center gap-3.5">
                            <Heading
                                size="headingxs"
                                as="p"
                                className="font-inter text-[14px] font-bold uppercase text-light_blue-700"
                            >
                                Art de la table
                            </Heading>
                        <div className="h-[2px] w-full bg-light_blue-700" />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase text-gray-600 hover:font-bold hover: text-light_blue-700"
                      >
                        Mobilier
                      </Text>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase tex gray-600 hover:font-bold hover: text-light blue-780"
                      >
                        Nappage
                      </Text>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase text-gray-600 hover:font-bold hover: text-light_blue-700"
                      >
                        Matériel de salle
                      </Text>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase text-gray-600 hover:font-bold hover: text-light_blue-700"
                      >
                        Cuisine 
                      </Text>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase text-gray-600 hover: font-bold hover: text-light_blue-700"
                      >
                        Barbecue
                      </Text>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase text-gray-600 hover: font-bold hover: text-light_blue-700"
                      >
                        Tente
                      </Text>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase text-gray-600 hover:font-bold hover: text-light_blue-700"
                      >
                        Chauffage
                      </Text>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase text-gray-600 hover: font-bold hover: text-light_blue-700"
                      >
                        Podium Piste de danse 
                      </Text>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase text-gray-600 hover: font-bold hover: text-light_blue-700"
                      >
                        Son et lumière 
                      </Text>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase text-gray-600 hover:font-bold hover: text-light_blue-700"
                      >
                        Packs
                      </Text>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                      <Text
                        as="p"
                        className="font-inter text-[14px] font-medium uppercase text-gray-600 hover:font-bold hover: text-light_blue-700"
                      >
                        Consommables
                      </Text>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
    );
}

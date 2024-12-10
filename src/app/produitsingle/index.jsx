"use client";

import {Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RoundTableImage from "../../components/RoundTableImage";
import ProductRecommendationSection from "./ProductRecommendationSection";
import RelatedArticlesSection from "./RelatedArticlesSection";
import SignUpSection from "./SignUpSection";
import React, {Suspense } from "react";
import {
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemState,
    Accordion,
    AccordionItem,
} 
from "react-accessible-accordion";
const accordionData = [{ deliveryTexts: "Livraisons" }, { deliveryText: "Questions" }];

export default function PRODUITSINGLEPage() {
    const [quantity, setQuantity]= React.useState(1);
    return (
        <><div classaame="w-full bg-white">
            <Header />
            <div className="mt-5 flex flex-col items-center gap-[78px] lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
                <div className="container-xs lg:px-5 md:px-5">
                    <div className="flex flex-col gар-5">
                        <div className="flex justify-between gap-5 md:flex-col">
                            <div className="flex">
                                <Text as="p" className="text-[14px] font-medium text-gray-800">
                                    Home
                                </Text>
                            </div>
                            <div className="flex flex-1 items-center px-1 md:self-stretch">
                                <div className="h-[5px] w-[5px] rounded-sm bg-gray-500_4c" />
                                <div className="flex flex-1 px-2.5">
                                    <Text as="p" className="text-[14px] font-medium text-gray-500">
                                        Art de la table
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[42px]">
                            <div className="flex items-center gap-6 md:flex-col">
                                <div className="flex w-full items-start gap-[46px] rounded-1g bg-gray-100_02 p-2.5 md:flex-col">
                                    <div className="flex w-[8%] flex-col gap-1 md:w-full md:flex-row">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                            {[...Array(4)].map((d, index) => (
                                                <RoundTableImage key={`listTable${index}`} className="bg-white" />
                                            ))}
                                        </Suspense>
                                    </div>
                                    <Img
                                        src="img_location_cheese.png"
                                        width={552}
                                        height={552}
                                        alt="Cheese Image"
                                        className="mb-12 mt-8 h-[552px] w-[80%] self-center object-contain md:my-0 md:w-full" />
                                </div>
                                <div className="flex w-full flex-col items-center">
                                    <div className="mr-2.5 flex items-start justify-between gap-5 self-stretch md:mr-0 sm:flex-col">
                                        <Text
                                            size="text3x1"
                                            as="p"
                                            className="self-center font-playfairdisplay text-[30px] font-normal text-gray-900 1g:text-[25px] md:text-[24px] sm:text-[22px]"
                                        >
                                            Cheese - appareil à raclette 1/2 roue
                                        </Text>
                                        <Img
                                            src="img_television.svg"
                                            width={26}
                                            height={24}
                                            alt="Television Image"
                                            className="mt-1.5 h-[24px] sm:w-full" />
                                    </div>
                                    <div className="mt-1.5 flex flex-wrap items-center gap-2 self-stretch">
                                        <Text size="text2x1" as="p" className="text-[24px] font-normal text-gray-900 1g:text-[20px]">
                                            39,50€
                                        </Text>
                                        <Text as="p" className="text-[14px] font-normal text-gray-500">
                                            /pièce
                                        </Text>
                                    </div>
                                    <div className="mt-2.5 flex flex-col gap-[18px] self-stretch">
                                        <div className="h-[0.5px] bg-gray-500_66" />
                                        <div className="flex items-center justify-center md:flex-col">
                                            <div className="flex flex-1 justify-center gap-2 md:self-stretch">
                                                <div className="flex items-center gap-2.5">
                                                    <Img
                                                        src="img_capa_1.svg"
                                                        width={24}
                                                        height={24}
                                                        alt="Capacity Image"
                                                        className="h-[24px]" />
                                                    <Heading as="h1" className="text-[16px] font-normal text-gray-900 1g:text-[13px]">
                                                        <span>20</span>
                                                        <span>cm</span>
                                                    </Heading>
                                                </div>
                                                <div className="Flex flex-1 items-center gap-[11px] px-2">
                                                    <Img src="img_frame.svg" width={24} height={24} alt="Frame Image" className="h-[24px]" />
                                                    <Heading as="h2" className="text-[16px] font-normal text-gray-900 1g:text-[13px]">
                                                        <span>50</span>
                                                        <span>cm</span>
                                                    </Heading>
                                                </div>
                                            </div>
                                            <Text size="texts" as="p" className="self-end text-[12px] font-normal text-gray-500">
                                                <span>REF:&nbsp;</span>
                                                <span className="font-medium">VABGNS</span>
                                            </Text>
                                        </div>
                                        <div className="h-[0.5px] bg-gray-500_66" />
                                    </div>
                                    <Text as="p" className="mt-3.5 text-[14px] font-normal leading-[130%] text-gray-700_01">
                                        <>
                                            Location appareil à raclette Raclette traditionnelle 1/2 roue
                                            <br />
                                            Réglable en hauteur
                                            <br />
                                            Appareil à raclette professionnel
                                            <br />
                                            Boitier de chauffe horizontal réglable en hauteur
                                            <br /> <br />
                                            220V
                                            <br />
                                            900W
                                        </>
                                    </Text>
                                    <div className="mt-[268px] self-stretch"> <div className="ex flex-col gap-4">
                                        <div className="h-[0.5px] bg-gray-500_66" />
                                        <div className="flex items-center justify-center gap-2 md:flex-col">
                                            <div className="Flex w-[20%] items-center justify-between gap-5 rounded-md border border-solid border-black-900_21 bg-white p-3 md:w-full">
                                                <div
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        setQuantity((quantity) => (quantity < 1 ? 0 : quantity - 1));
                                                    } }
                                                    className="flex cursor-pointer flex-col"
                                                >
                                                    <Img src="img_minus.svg" width={16} height={16} alt="Minus Image" className="h-[16px]" />
                                                </div>
                                                <Heading as="h3" className="text-[16px] font-medium text-black-900 lg:text-[13px]">
                                                    {quantity}
                                                </Heading>
                                                <div
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        setQuantity((quantity) => quantity + 1);
                                                    } }
                                                    className="flex cursor-pointer flex-col items-center"
                                                >
                                                    <Img src="img_plus.svg" width={16} height={16} alt="Plus Image" className="h-[16px]" />
                                                </div>
                                            </div>
                                            <Button
                                                color="cyan_300_01"
                                                size="lg"
                                                className="min-w-[592px] rounded-ad px-[34px] font-cabinetgrotesk font-bold uppercase sm:px-4"
                                            >
                                                Ajouter au panier
                                            </Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start md:flex-col">
                                <div className="Flex w-full flex-col items-start gap-2.5 self-center">
                                    <Heading
                                        size="textxl"
                                        as="h4"
                                        className="font-cabinet grotesk text-[20px] font-normal text-gray-900 1g:text-[17px]"
                                    >
                                        Description produit
                                    </Heading>
                                    <Text
                                        as="p"
                                        className="M-[92%] text-[14px] font-normal leading-[130%] text-gray-500 lg:w-full md:w-full"
                                    >
                                        Festi vous propose à la location un/une &quot; Jewel grand couteau/10pc&quot; pour votre
                                        évenement et ce dis 8,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête
                                        d&#39; anniversaire ou du personnel, ce produit a fait l&#39;objet d&#39; une sélection rigoureuse
                                        par notre équipe. Il est en location chez nous sous la référence &quot; VAJGC&quot;. Nous sommes à
                                        votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une
                                        réussite. Vous pourrez trouver tout une série d&#39; autre produit à louer de ce type dans la
                                        catégorie &quot; Art de la Table&quot;.
                                    </Text>
                                </div>
                                <Accordion className="flex w-full flex-col gap-0.5 rounded-md bg-gray-50_01">
                                    {accordionData.map((d, i) => (
                                        <AccordionItem uuid={i} key={`Expandable List${i}`}>
                                            <AccordionItemHeading className="w-full">
                                                <AccordionItemButton>
                                                    <AccordionItemState>
                                                        {() => (
                                                            <>
                                                                <div className="mr-3 flex flex-1 items-center justify-between gap-5 bg-gray-50_99 p-[18px] mdtmr-0">
                                                                    <Heading
                                                                        as="h5"
                                                                        className="self-end font-cabinetgrotesk text-[16px] font-medium uppercase text-gray-800 1g:text-[13px]"
                                                                    >
                                                                        {d.deliveryText}
                                                                    </Heading>
                                                                    <Img
                                                                        src="img_plus_gray_800.svg"
                                                                        width={24}
                                                                        height={24}
                                                                        alt="Expand Icon"
                                                                        className="h-[24px]" />
                                                                </div>
                                                            </>
                                                        )}
                                                    </AccordionItemState>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div>Dummy Content</div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sele stretch">
                {/* related articles section */}
                <RelatedArticlesSection />

                {/* product recommendation section */}
                <ProductRecommendationSection />
                <div className="mt-[82px]">
                    <div className="relative z-[1] flex h-[566px] items-start rounded-[12px] bg-[url(/images/img_group_121.png)] bg-cover bg-no-repeat py-[62px] lg:py-8 md:h-auto md:py-5 sm:py-4">
                        <div className="container-xs mb-[182px] flex justify-center px-14 1g:px-5 md:px-5">
                            <div className="flex w-[64%] flex-col items-center gap-[42px] lg:w-full md:w-full">
                                <div className="flex flex-col items-center gap-0.5 px-1.5">
                                    <Heading
                                        size="text4x1"
                                        as="p"
                                        className="font-cabinetgrotesk text-[35px] font-medium text-gray-800 lg:text-[29px] md:text-[29px] sm:text-[27px]"
                                    >
                                        <span className="text-gray-800">On s&apos;occupe de&nbsp;</span>
                                        <span className="font-extrabold text-cyan-300_01">tout</span>
                                    </Heading>
                                    <Text as="p" className="text-[14px] font-normal text-gray-500">
                                        Office ipsum you must be muted. It meeting commitment busy pain.
                                    </Text>
                                </div>
                                <div className="relative h-[138px] self-stretch 1g:h-auto md:h-auto">
                                    <div className="mt-[42px] flex flex-1 justify-between gap-5 px-32 lg:px-8 md:px-5 sm:flex-col sm:px-4">
                                        <div className="h-[0.5px] w-[20%] bg-gray-500" />
                                        <div className="h-[0.5px] w-[20%] bg-gray-500" />
                                        <div className="mr-[34px] h-[0.5px] w-[26%] bg-gray-500 lg:mr-0 md:mr-0" />
                                    </div>
                                    <div className="absolute bottom- left-e right-0 top-0 m-auto flex h-max flex-1 items-end justify-center py-1.5 mdirelative ad:fles-col">
                                        <div className="flex flex-col items-start">
                                            <Img
                                                src="img_television_gray_700.svg"
                                                width={56}
                                                height={50}
                                                alt="Tv Icon"
                                                className="ml-[52px] h-[50px] w-[34%] object-contain md:ml-0" />
                                            <Heading
                                                size="textxl"
                                                as="p"
                                                className="int-2.5 font-cabinetgrotesk text-[20px] font-medium text-gray-800 1g:text-[17px]"
                                            >
                                                Livraison & Reprise
                                            </Heading>
                                            <Text as="p" className="ml-[26px] mt-1 text-[14px] font-normal text-gray-500 md:ml-0">
                                                Selon vos besoins
                                            </Text>
                                        </div>
                                        <div className="flex w-[22%] flex-col gap-2 px-[42px] md:w-full md:px-5 sm:px-4">
                                            <Img
                                                src="img_dish.svg"
                                                width={60}
                                                height={54}
                                                alt="Dish Icon"
                                                className="ml-6 h-[54px] w-[66%] object-contain md:ml-0" />
                                            <div className="flex flex-col items-center gap-1">
                                                <Heading
                                                    size="textxl"
                                                    as="p"
                                                    className="font.cabinetgrotesk text-[20px] font medium text-gray-800 lg:text [17px]"
                                                >
                                                    Nettoyage
                                                </Heading>
                                                <Text as="p" className="text-[14px] font-normal text-gray-500">
                                                    Selon vos besoins
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-center gap-1.5 px-[42px] md:self-stretch md:px-5 sm:px-4">
                                            <Img
                                                src="img_thumbs_up.svg"
                                                width={50}
                                                height={52}
                                                alt="Thumbs Up Icon"
                                                className="h-[52px] w-[30%] object-contain" />
                                            <div className="flex flex-col items-center gap-2 self-stretch">
                                                <Heading
                                                    size="textxl"
                                                    as="p"
                                                    className="font-cabinetgrotesk text-[20px] font-medium text-gray-800 lg:text-[17px]"
                                                >
                                                    Commande Illimitée
                                                </Heading>
                                                <Text as="p" className="text-[14px] font-normal text-gray-500">
                                                    Tout est possible
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col items-end gap-3 self-center md:self-stretch">
                                            <Img
                                                src="img_music.svg"
                                                width={62}
                                                height={54}
                                                alt="Music Icon"
                                                className="mr-[68px] h-[54px] w-[32%] object-contain md:mr-0" />
                                            <div className="flex flex-col items-end gap-1.5 self-stretch">
                                                <Heading
                                                    size="textxl"
                                                    as="p"
                                                    className="font-cabinetgrotesk text-[20px] font-medium text-gray-800 lg:text-[17px]"
                                                >
                                                    Transport & Enlèvement
                                                </Heading>
                                                <Text as="p" className="mr-[38px] text-[14px] font-normal text-gray-500 md:mr-0">
                                                    On s&apos;occupe de tout.
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* sign up section */}
                    <SignUpSection />
                </div>
            </div>
        </div><Footer />
        </>
    );
}

                                            
    
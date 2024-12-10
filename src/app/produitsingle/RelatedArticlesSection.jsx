"use client";

import { Button, Img, Text, Heading, Slider } from "../../components";
import ProductInfoCard from "../../components/ProductInfoCard";
import React from "react";

export default function RelatedArticlesSection() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef= React.useRef(null);
    
    return (
      <>
        {/* related articles section */}
        <div className="relative h-[570px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 bg-gray-50_99 py-6 sm:py-4">
                <div className="container-xs mb-[468px] flex flex-wrap items-center justify-between gap-5 lg:px-5 md:px-5">
                    <Heading
                      size="text4x1"
                      as="h2"
                      className="font-cabinetgrotesk text-[35px] font-medium text-gray-800 lg:text-[29px] md:text-[29px] sm:text-[27px]"
                    >
                      Articles similaires
                    </Heading>
                    <Heading
                      as="h3"
                      className="font-cabinetgrotesk text-[16px] font-medium uppercase text-gray-800 underline lg:text-[13px]"
                    >
                      Voir toute la collection
                    </Heading>
                </div>
            </div>
            <div className="absolute bottom-[29px] left-0 right-0 mx-auto h-[438px] w-full">
                <div className="absolute bottom-0 left-[30px] top-e m-auto w-full overflow-x-scroll">
                  <Slider
                    autoPlay
                    autoplay Interval={2000}
                    responsive={{ 0: { items: 1}, 551: { items: 1}, 1051: { items: 1}, 1441: { items: 1}}}
                    disableDotsControls
                    activeIndex={sliderState}
                    onslideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                          <div className="flex gap-5 md:flex-col">
                              <ProductInfoCard />
                              <ProductInfoCard />
                              <ProductInfoCard />
                              <ProductInfoCard />
                              <div className="flex w-full flex-col gap-2 md:px-5">
                                  <div className="flex flex-col gap-[26px] rounded-1g bg-gray-100 px-2.5 py-3.5">
                                      <div className="flex items-center justify-center gap-1">
                                          <div className="flex flex-1 px-1.5">
                                              <Img src="img_icons.svg" width={32} height={32} alt="Card Icon" className="h-[32px]" />
                                          </div>
                                          <Heading
                                            size="textxs"
                                            as="h4"
                                            className="mb-1 flex items-center justify-center self-end rounded bg-white px-2 text-[10px] font-medium uppercase text-gray-me"
                                          >
                                            Art de la table
                                          </Heading>
                                      </div>
                                      <Img
                                        src="img_table_ronde_165cm_224x224.png"
                                        width={224}
                                        height={224}
                                        alt="Product Image"
                                        className="mx-[42px) mb-12 h-[224px) object-cover mdimx-0"
                                      />
                                  </div>
                                  <div className="Flex Flex-col gap-1 px-2.5">
                                      <div className="flex flex-wrap items-start justify-between gap-5">
                                          <Text
                                            sizes="text2xl"
                                            as="p"
                                            className="self-center font-playfairdisplay text-[24px] font-normal text-gray-800 1g:text-[20px]"
                                          >
                                            Title
                                          </Text>
                                          <Text
                                            size="text2xl"
                                            as="p"
                                            className="font-geist text-[24px] font-medium text-gray-800 1g:text-[20px]"
                                          >
                                              <span>0</span>
                                              <span className="font-normal">€</span>
                                          </Text>
                                          </div>
                                          <div className="flex items-center justify-between gap-5">
                                              <Text as="p" className="text-[14px] font-normal text-gray-500">
                                                  <span>0,35€/Piece .&nbsp;</span>
                                                  <span className="text-[10px]">REF: VABGNS</span>
                                                  </Text>
                                                  <Button shape="round" className="min-w-[68px] rounded-[12px] px-1.5 font-medium">
                                                      20 pieces
                                                  </Button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </React.Fragment>
                              ))}
                            />
                            </div>
                            <div className="absolute left-0 right-0 top-[39%] mx-auto flex flex-1 justify-between gap-5">
                                <Button
                                  color="cyan_300_01"
                                  size="md"
                                  shap="square"
                                  onClick={() => {
                                    slidertef?.current?.slidePrev();
                                  }}
                                  className="w-[46px] px-2.5"
                                >
                                  <Img src="img_arrow_down.svg" width={24} height={24} />
                                </Button>
                                <Button
                                  color="cyan_300_01"
                                  size="md"
                                  shape="square"
                                onClick={() => {
                              slidertef?.current?.slideNext();
                            }}
                            className="mr-40 w-[46px] px-2.5"
                        >
                            <Img src="img_arrow_right.svg" width={24} height={24} />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
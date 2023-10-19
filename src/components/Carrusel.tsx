import { Button, ScrollShadow } from '@nextui-org/react'
import React from 'react'
import { BsArrowBarDown, BsArrowBarUp, BsArrowRepeat, BsCurrencyBitcoin } from 'react-icons/bs'
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"
import { SiTether } from "react-icons/si"
import { FaEthereum } from 'react-icons/fa'
import { FaLitecoinSign } from 'react-icons/fa6'

const Carrusel = () => {

  const currencies = [
    {
      id: 1,
      coinName: "Litecoin",
      name: "LTC",
      gainOrLose: "7.5%",
      state: "gain",
      value: "25,5000000",
      icon: <FaLitecoinSign/>
    },
    {
      id: 2,
      coinName: "Bitcoin",
      name: "BTC",
      gainOrLose: "7.5%",
      state: "lose",
      value: "25,5000000",
      icon: <BsCurrencyBitcoin/>
    },
    {
      id: 3,
      coinName: "Ethereum",
      name: "ETH",
      gainOrLose: "7.5%",
      state: "gain",
      value: "25,5000000",
      icon: <FaEthereum/>
    },
    {
      id: 4,
      coinName: "Theter",
      name: "USDT",
      gainOrLose: "7.5%",
      state: "lose",
      value: "25,5000000",
      icon: <SiTether/>
    },
    {
      id: 2,
      coinName: "Bitcoin",
      name: "BTC",
      gainOrLose: "7.5%",
      state: "gain",
      value: "25,5000000",
      icon: <BsCurrencyBitcoin/>
    },
    {
      id: 3,
      coinName: "Ethereum",
      name: "ETH",
      gainOrLose: "7.5%",
      state: "lose",
      value: "25,5000000",
      icon: <FaEthereum/>
    },
    {
      id: 4,
      coinName: "Theter",
      name: "USDT",
      gainOrLose: "7.5%",
      state: "gain",
      value: "25,5000000",
      icon: <SiTether/>
    }
  ]

  return (
    <div className='flex flex-nowrap items-center px-4 justify-between text-blue-950 bg-[--white] w-full h-full rounded-xl shadow-lg overflow-hidden'>
      {/* <div className="text-sm">
        <Button isIconOnly className='rounded-r-lg h-20 bg-transparent'><BiSolidLeftArrow/></Button>
      </div> */}
      <ScrollShadow orientation="horizontal" hideScrollBar className="flex flex-nowrap items-center ">
        <div className="flex flex-nowrap gap-2 w-full max-h-full scrollbar-hide overflow-x-scroll scroll-smooth" data-carousel="slide">
          {
            currencies.map((item) => ((
              <div key={item.id} className="text-[--blue] flex flex-col items-center text-sm">
                <div className="flex flex-nowrap items-center w-[5rem] gap-1">
                  <span>{item.icon}</span>
                  <div className="flex flex-col">
                    <span className='font-semibold text-left text-[0.625rem] leading-[0.625rem]'>
                      {item.name} <span className='font-extralight text-[0.5rem]'>{item.coinName}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col leading-[0.625rem]">
                  <span className='text-[0.5rem]'>{item.value}</span>
                  <span className={`text-[0.5rem] text-right ${item.state === "gain" ? "text-[--green]" : "text-[--red]"}`}>
                    {
                      item.state === "gain"
                        ? <span className='flex items-center justify-end'> <BiSolidDownArrow/> {item.gainOrLose}</span>
                        : <span className='flex items-center justify-end'> <BiSolidUpArrow/> {item.gainOrLose}</span>
                    }
                  </span>
                </div>
              </div>
            )))
          }
        </div>
      </ScrollShadow>
      {/* <div className="text-sm">
        <Button isIconOnly className='rounded-l-lg h-20 bg-transparent'><BiSolidRightArrow/></Button>
      </div> */}
    </div>
  )
}

export default Carrusel
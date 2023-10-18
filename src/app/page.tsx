"use client"

import Tables from "@/components/Tables"
import Transaction, { TransactionType } from "@/components/Transaction"
import { Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import Link from "next/link"
import {GoInfo} from "react-icons/go"
import { BiSolidUserCircle, BiSolidBell } from "react-icons/bi"
import Menu from "@/components/Menu"
import Carrusel from "@/components/Carrusel"

export default function Home() {

  const notifications = [
    {
      text: "Recibiste 2.5 ETH",
      coin: "ETH",
      quantity: "2.5",
      type: TransactionType.receive,
      date: "14/06/23"
    },
    {
      text: "Enviaste 5.52 USDT",
      type: TransactionType.send,
      date: "14/06/23"
    },
  ]

  return (
    <div className="w-full h-screen flex flex-col-reverse justify-between bg-[--white]">
      <div className="py-1 px-2.5 h-full w-full">

        <div className="flex flex-col gap-2 items-start justify-center h-fit">
          {/* User and Notifications */}
          <div className="flex flex-nowrap items-center justify-between w-full h-14 bg-transparent text-white text-2xl rounded-lg px-4 py-2">
            <Link href={`/`} className="cursor-pointer text-5xl text-[--blue]"><BiSolidUserCircle/></Link>
            <Dropdown 
              showArrow
            >
              <DropdownTrigger>
                <Button 
                  variant="bordered"
                  isIconOnly
                  className="text-3xl border-0 text-[--blue]"
                >
                  <BiSolidBell/>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                {
                  notifications.map((item) => (
                    <DropdownItem key="edit" className="w-full flex flex-nowrap items-center">
                      <span className={`${item.type === TransactionType.receive ? "text-[--green]" : "text-[--red]"} `}>{item.text}</span>
                      <span className="flex items-center justify-between">{item.date}</span>
                    </DropdownItem>
                  ))
                }
              </DropdownMenu>
            </Dropdown>
          </div>
          {/* Carrusel */}
          <div className="flex flex-nowrap items-center justify-between w-full h-16 bg-[--blue] text-white text-2xl rounded-lg px-4 py-2">
            <Carrusel/>
          </div>
          {/* Balance */}
          <div className="flex flex-nowrap items-center justify-between w-full h-16 bg-[--blue] text-white text-2xl rounded-lg px-4 py-2">
            <span>Balance Total</span>
            <button className="flex flex-wrap">
              <span className="p-1">$ 10,00</span>
              <Badge size="md" content={<GoInfo/>} color="default" 
                className="bg-transparent border-0 text-white" placement="top-right"
              >
                <span className="p-1"></span>
              </Badge>
            </button>
          </div>

          <Tables/>
          <Transaction/>

        </div>
      </div>

      <div className="flex flex-nowrap justify-center w-full h-fit shadow-lg fixed ">
        <Menu />
      </div>
    </div>
  )
}

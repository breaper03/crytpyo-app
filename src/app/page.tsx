"use client"

import Tables from "@/components/Tables"
import Transaction, { TransactionType } from "@/components/Transaction"
import { Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import Link from "next/link"
import {GoInfo} from "react-icons/go"
import { BiSolidUserCircle, BiSolidBell } from "react-icons/bi"
import Menu from "@/components/Menu"
import Carrusel from "@/components/Carrusel"
import { BsFillTrashFill } from "react-icons/bs"
import { useState } from "react"

export default function Home() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();


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
    <div className="w-full h-full flex flex-col-reverse justify-between bg-[--light-blue] overflow-y-scroll">

      <div className="justify-center items-end w-full h-fit text-transparent">
        .
      </div>

      <div className="py-1.5 px-1.5 h-fit w-full bg-[--light-blue] mb-10">
        <div className="flex flex-col gap-2 items-start justify-center h-fit  w-full ">
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
                  <Badge className="bg-[--red]" size="sm" content="">
                    <BiSolidBell/>
                  </Badge>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                {
                  notifications.map((item) => (
                    <DropdownItem key="edit" className="w-full flex flex-nowrap items-center">
                      <span className={`${item.type === TransactionType.receive ? "text-[--green]" : "text-[--red]"} font-extrabold `}>{item.text}</span>
                      <span className="flex items-center justify-between font-semibold">{item.date}</span>
                    </DropdownItem>
                  ))
                }
              </DropdownMenu>
            </Dropdown>
          </div>
          {/* Carrusel */}
          <div className="flex flex-nowrap items-center justify-between w-full h-[5rem] mb-[0.3rem] text-white text-2xl rounded-lg px-1 py-1">
            <Carrusel/>
          </div>
          {/* Balance */}
          <div className="flex flex-nowrap items-center justify-between w-full h-16 mb-[0.3rem] bg-[--blue] text-white text-2xl rounded-lg px-4 py-2">
            <span className="text-[1.25rem]">Balance Total</span>
            <Button className="flex flex-nowrap text-center bg-transparent  text-white">
              <div className="flex flex-nowrap items-end justify-around">
                <p className="text-[1rem] mt-1">$</p> 
                <p className="text-[1.625rem] py-1 font-medium">10,00</p>
              </div>
              <Badge size="md" content={<GoInfo/>} color="default"  onClick={onOpen}
                className="bg-transparent border-0 text-white" placement="top-right"
              >
                <span className="p-1"></span>
              </Badge>
            </Button>
            <Modal 
              classNames={{
                backdrop: "bg-[rgba(32,38,90,0.35)]"
              }}
              isOpen={isOpen} 
              placement="center"
              onOpenChange={onOpenChange} 
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-center">Modal Title</ModalHeader>
                    <ModalBody>
                      <p className="text-[#8C8D92]">
                        Este valor es en dólares americanos y es solo
                        de manera referencial.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>

          <div className="w-full mb-[0.3rem]">
            <Tables/>
          </div>
          <div className="w-full mb-[0.3rem]">
            <Transaction/>
          </div>

        </div>
      </div>

      <div className="flex flex-nowrap justify-center items-end w-full h-full fixed bg-transparent mb-[7rem]">
        <Menu />
      </div>
    </div>
  )
}

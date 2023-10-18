"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import {BsCurrencyBitcoin, BsArrowBarUp, BsArrowBarDown, BsArrowRepeat} from "react-icons/bs"
import {FaEthereum} from "react-icons/fa"
import {FaLitecoinSign} from "react-icons/fa6"
const Tables = () => {

  const currencies = [
    {
      name: "LTC",
      value: 1.00,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <FaLitecoinSign/>
    },
    {
      name: "BTC",
      value: 0.520000,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <BsCurrencyBitcoin/>
    },
    {
      name: "ETH",
      value: 300,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <FaEthereum/>
    },
  ]

  return (
    <>
      <Table aria-label="Example static collection table" isCompact={true} layout='auto'
        classNames={{
          base: ["sm:w-[31rem] sm:shadow-lg sm:rounded-lg sm:overflow-scroll"],
          th: ["sm:w-[0px] text-[--blue]"],
        }}
      >
        <TableHeader>
          <TableColumn> </TableColumn>
          <TableColumn>Balance</TableColumn>
          <TableColumn>Deposito</TableColumn>
          <TableColumn>Envio</TableColumn>
          <TableColumn>Intercambio</TableColumn>
        </TableHeader>

        <TableBody emptyContent="Nada para mostrar...">
          {
            currencies.map(item => ((
              <TableRow className='text-left' key={item.name}>
                <TableCell className='items-center py-4 flex justify-center gap-2'>{item.icon}{item.name}</TableCell>
                <TableCell className='h-fit'>{item.value}</TableCell>
                <TableCell><Button isIconOnly className='bg-transparent'>{item.action.deposit}</Button></TableCell>
                <TableCell><Button isIconOnly className='bg-transparent'>{item.action.withdrawal}</Button></TableCell>
                <TableCell><Button isIconOnly className='bg-transparent'>{item.action.swap}</Button></TableCell>
              </TableRow>
            )))
          }
        </TableBody>
      </Table>
    </>
  )
}

export default Tables
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
      coinName: "Ethereum",
      balance: "0.000",
      value: 1.00,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <FaLitecoinSign/>
    },
    {
      name: "BTC",
      coinName: "Ethereum",
      balance: "0.000",
      value: 0.520000,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <BsCurrencyBitcoin/>
    },
    {
      name: "ETH",
      coinName: "Ethereum",
      balance: "0.000",
      value: 300,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <FaEthereum/>
    },
  ]

  return (
    <div className='w-full h-full item-center justify-center'>
      <div className="p-2 flex items-center justify-center shadow-md rounded-lg bg-white">
          <table className="w-full text-sm text-left text-[--blue] rounded-lg ">
              <thead className="text-xs text-[--blue] uppercase text-center">
                  <tr>
                      <th scope="col" className="px-1 py-1"></th>
                      <th scope="col" className="px-1 py-1">
                        Balance
                      </th>
                      <th scope="col" className="px-1 py-1">
                        Deposito
                      </th>
                      <th scope="col" className="px-1 py-1">
                        Envio
                      </th>
                      <th scope="col" className="px-1 py-1">
                      Intercambio
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {
                    currencies.map(item => ((
                      <tr className='text-left' key={item.name}>
                        <th className='items-center py-1 flex justify-around gap-2'>
                          <span className='text-2xl '>{item.icon}</span>
                          <span className='flex flex-col text-md font-bold gap-0'>{item.name} <p className='text-xs font-light'>{item.coinName}</p></span>
                        </th>
                        <td className='text-left pl-3'>
                          <span className='flex flex-col justify-start font-extrabold'>{item.value}</span>
                          <span className='font-extralight'>{item.balance}</span>
                        </td>
                        <td className='text-center'><Button isIconOnly className='bg-transparent'>{item.action.deposit}</Button></td>
                        <td className='text-center'><Button isIconOnly className='bg-transparent'>{item.action.withdrawal}</Button></td>
                        <td className='text-center'><Button isIconOnly className='bg-transparent'>{item.action.swap}</Button></td>
                      </tr>
                    )))
                  }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Tables
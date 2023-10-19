"use client"

import { Button } from '@nextui-org/react'
import {BsCurrencyBitcoin, BsArrowBarUp, BsArrowBarDown, BsArrowRepeat} from "react-icons/bs"
import { CgArrowTopRightO, CgArrowBottomLeftO } from "react-icons/cg"
import {FaEthereum} from "react-icons/fa"
import {FaLitecoinSign} from "react-icons/fa6"
import eth from "../../public/eth.svg"

const Tables = () => {

  const currencies = [
    {
      name: "LTC",
      coinName: "Litecoin",
      balance: "0,000",
      value: "0,520000",
      action: {deposit: <CgArrowBottomLeftO/>, withdrawal: <CgArrowTopRightO/>, swap: <BsArrowRepeat/>},
      icon: <FaLitecoinSign/>
    },
    {
      name: "BTC",
      coinName: "Bitcoin",
      balance: "0,000",
      value: "0.520000",
      action: {deposit: <CgArrowBottomLeftO/>, withdrawal: <CgArrowTopRightO/>, swap: <BsArrowRepeat/>},
      icon: <BsCurrencyBitcoin/>
    },
    {
      name: "ETH",
      coinName: "Ethereum",
      balance: "0,000",
      value: "300",
      action: {deposit: <CgArrowBottomLeftO/>, withdrawal: <CgArrowTopRightO/>, swap: <BsArrowRepeat/>},
      icon: <FaEthereum/>
    },
    {
      name: "LTC",
      coinName: "Litecoin",
      balance: "0,000",
      value: "0,520000",
      action: {deposit: <CgArrowBottomLeftO/>, withdrawal: <CgArrowTopRightO/>, swap: <BsArrowRepeat/>},
      icon: <FaLitecoinSign/>
    },
    {
      name: "BTC",
      coinName: "Bitcoin",
      balance: "0,000",
      value: "0.520000",
      action: {deposit: <CgArrowBottomLeftO/>, withdrawal: <CgArrowTopRightO/>, swap: <BsArrowRepeat/>},
      icon: <BsCurrencyBitcoin/>
    },
    {
      name: "ETH",
      coinName: "Ethereum",
      balance: "0,000",
      value: "300",
      action: {deposit: <CgArrowBottomLeftO/>, withdrawal: <CgArrowTopRightO/>, swap: <BsArrowRepeat/>},
      icon: <FaEthereum/>
    },
    {
      name: "ETH",
      coinName: "Ethereum",
      balance: "0,000",
      value: "300",
      action: {deposit: <CgArrowBottomLeftO/>, withdrawal: <CgArrowTopRightO/>, swap: <BsArrowRepeat/>},
      icon: <FaEthereum/>
    },
  ]

  return (
    <div className='w-full h-full item-center justify-center'>
      <div className="py-1 px-2 flex items-center justify-center shadow-md rounded-xl bg-white">
          <table className="w-full text-sm text-left text-[--blue]">
              <thead className="text-xs text-[--blue] uppercase text-center border-b-2 border-[--light-blue] pb-0">
                  <tr>
                      <th scope="col" className="px-1 py-1 font-extrabold text-[0.625rem]"></th>
                      <th scope="col" className="px-1 py-1 font-extrabold text-[0.625rem]">
                        Balance
                      </th>
                      <th scope="col" className="px-1 py-1 font-extrabold text-[0.625rem]">
                        Deposito
                      </th>
                      <th scope="col" className="px-1 py-1 font-extrabold text-[0.625rem]">
                        Envio
                      </th>
                      <th scope="col" className="px-1 py-1 font-extrabold text-[0.625rem]">
                      Intercambio
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {
                    currencies.map(item => ((
                      <tr className='text-left border-b-2 border-[--light-blue] items-center max-h-[2.19rem] last:border-0' key={item.name}>

                        <th className='items-center py-[0.30rem] pr-11 flex h-full justify-between mt-1 gap-1 leading-[0.625rem]'>
                          <span className='text-[1.375rem]'>{item.icon}</span>
                          <span className='flex flex-col text-[0.6875rem] text-right font-extrabold'>{item.name} <p className='text-[0.5625rem] font-normal'>{item.coinName}</p></span>
                        </th>

                        <td className='text-right pr-3 leading-[0.625rem] items-center'>
                          <span className='flex flex-col justify-start text-[0.675rem] font-extrabold'>{item.value}</span>
                          <span className='font-normal text-[0.5625rem]'>{item.balance} $</span>
                        </td>

                        <td className='text-center'><Button isIconOnly size='sm' variant='light' className='text-[0.8025rem] max-h-6'>{item.action.deposit}</Button></td>
                        <td className='text-center'><Button isIconOnly size='sm' variant='light' className='text-[0.8025rem] max-h-6'>{item.action.withdrawal}</Button></td>
                        <td className='text-center'><Button isIconOnly size='sm' variant='light' className='text-[0.8025rem] max-h-6'>{item.action.swap}</Button></td>
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
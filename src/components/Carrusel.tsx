import React from 'react'
import { BsArrowBarDown, BsArrowBarUp, BsArrowRepeat, BsCurrencyBitcoin } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import { FaLitecoinSign } from 'react-icons/fa6'

const Carrusel = () => {

  const currencies = [
    {
      id: 1,
      name: "LTC",
      value: 1.00,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <FaLitecoinSign/>
    },
    {
      id: 2,
      name: "BTC",
      value: 0.520000,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <BsCurrencyBitcoin/>
    },
    {
      id: 3,
      name: "ETH",
      value: 300,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <FaEthereum/>
    },
    {
      id: 4,
      name: "LTC",
      value: 1.00,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <FaLitecoinSign/>
    },
    {
      id: 5,
      name: "BTC",
      value: 0.520000,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <BsCurrencyBitcoin/>
    },
    {
      id: 6,
      name: "ETH",
      value: 300,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <FaEthereum/>
    },
    {
      id: 7,
      name: "ETH",
      value: 300,
      action: {deposit: <BsArrowBarDown/>, withdrawal: <BsArrowBarUp/>, swap: <BsArrowRepeat/>},
      icon: <FaEthereum/>
    },
  ]

  return (
    <>
      <div className="" data-carousel="slide"></div>
    </>
  )
}

export default Carrusel
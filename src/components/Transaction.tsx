"use client"

import { CgArrowTopRightO, CgArrowBottomLeftO } from "react-icons/cg"

export enum TransactionType {
  "receive",
  "send"
}

interface Transaction {
  coin: string,
  coinName: string
  type: TransactionType,
  quantity: number, //! cantidad expresada en dolares
  date: string
}
const Transactions = () => {

  const transactionsHistory: Transaction[] = [
    {
      coin: "ETH",
      coinName: "Ethereum",
      type: TransactionType.receive,
      quantity: 2.50,
      date: "15 de junio"
    },
    {
      coin: "USDT",
      coinName: "Tether",
      type: TransactionType.send,
      quantity: 5.52,
      date: "15 de junio"
    },
  ]

  return (
    <>
      <div className="bg-white shadow-lg w-full h-fit py-2 px-1 rounded-lg">
        <div className="flex flex-col items-center justify-between">
          {
            transactionsHistory.map((item: Transaction) => (
              <div key={Math.random()} className='flex flex-wrap items-center justify-between w-full px-8 py-1'>
                <div className="flex items-center gap-10">
                  <span>
                    {
                      item.type === TransactionType.receive 
                        ? <span className='text-[--green] font-extrabold text-xl'><CgArrowTopRightO/></span> 
                        : <span className='text-[--red] font-extrabold text-xl'><CgArrowBottomLeftO/></span>
                    }
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-nowrap items-end">
                      <span className="font-bold text-xl mr-1">{item.coin}</span>
                      <span className="text-xs py-1 font-extralight">{item.coinName}</span>
                    </div>
                    <div className="text-[--blur-blue] text-base uppercase">
                      {item.type === TransactionType.receive ? "Recibiste" : "Enviaste"}
                    </div>
                  </div>
                </div>
                <div>
                  <span className={`${item.type === TransactionType.receive ? "text-[--green]" : "text-[--red]"} font-bold text-lg`}>
                    $ {item.quantity}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Transactions
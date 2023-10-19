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
      <div className="bg-white shadow-lg w-full h-fit py-2 rounded-xl">
        <div className="flex flex-col items-center justify-between">
          <div className="h-[1.0625rem] w-full text-[0.625rem] mb-1 bg-transparent flex flex-wrap items-center">
            <span className="flex flex-wrap items-center ml-[0.88rem] font-bold">Últimas transacciones</span>
          </div>
          <div className="h-[1.0625rem] w-full text-[0.5625rem] bg-[#D9D9D9A6] flex flex-wrap items-center">
            <span className="flex flex-wrap items-center ml-[0.88rem] font-semibold">15 de junio</span>
          </div>
          {
            transactionsHistory.map((item: Transaction) => (
              <div key={Math.random()} className='flex flex-wrap items-center justify-between w-full px-[1.06rem] py-1'>
                <div className="flex items-center gap-[0.69rem] py-2">
                  <span>
                    {
                      item.type === TransactionType.receive 
                        ? <span className='text-[--green] font-extrabold text-xl'><CgArrowTopRightO/></span> 
                        : <span className='text-[--red] font-extrabold text-xl'><CgArrowBottomLeftO/></span>
                    }
                  </span>
                  <div className="flex flex-col leading-[0.925rem]">
                    <div className="flex flex-nowrap items-end">
                      <span className="font-bold text-[1rem] mr-[1px]">{item.coin}</span>
                      <span className="text-[0.5625rem]  font-extralight">{item.coinName}</span>
                    </div>
                    <div className="text-[--blur-blue] text-[0.75rem] uppercase">
                      {item.type === TransactionType.receive ? "Recibiste" : "Enviaste"}
                    </div>
                  </div>
                </div>
                <div>
                  <span className={`${item.type === TransactionType.receive ? "text-[--green]" : "text-[--red]"} font-bold text-[1rem]`}>
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
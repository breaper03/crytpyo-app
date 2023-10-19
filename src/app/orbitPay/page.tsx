"use client"
import { Card, CardHeader, CardBody, Button, Snippet } from '@nextui-org/react'
import Image from 'next/image'
import {BiSolidLeftArrow} from "react-icons/bi"
import Frame from "@/app/images/Frame.ico"
import QR from "@/app/images/QR.ico"
import { useState } from 'react'
import Link from 'next/link'
const OrbitPay = () => {

  const [image, setImage] = useState(false)

  const QRimg = {
    src: QR,
    height: 184.992,
    width: 186
  }

  const Frameimg = {
    src: Frame,
    height: 168.992,
    width: 148
  }

  return (
    <div className='flex flex-col items-center justify-between h-full w-full text-[--white] bg-[--light-blue]'>
      <div className="bg-[--blue] w-full h-full p-4">
        <Button className='font-extrabold text-xl flex items-center gap-3 bg-transparent'>
          <Link href={"/"} className='flex items-center gap-3 text-white'>
            <BiSolidLeftArrow/>Home
          </Link>
        </Button>
      </div>
      <div className="h-full w-full px-2 my-5 bg-[--light-blue]">

        <Card className="h-[29.72225rem]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col w-full items-center text-center">
            <span className="text-center text-[1.875rem] font-extrabold text-[--blue]">Orbit Pay</span>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            {
              !image
                ? (
                  <Button className='flex flex-col gap-3 h-fit py-10 bg-transparent' onClick={() => setImage(!image)}>
                    <Image
                      alt="Frame"
                      className="object-cover rounded-xl"
                      src={Frame.src}
                      width={Frame.width}
                      height={Frame.height}
                    />
                    <span className='text-[0.75rem]'>Pulsa para ver el QR</span>
                  </Button>
                ) : (
                  <Button className='flex flex-col gap-3 h-fit py-10 bg-transparent' onClick={() => setImage(!image)}>
                    <Image
                      alt="QR"
                      className="object-cover rounded-xl"
                      src={QR.src}
                      width={QR.width}
                      height={QR.height}
                    />
                    <span className='text-[0.75rem]'>Pulsa para ocultar el QR</span>
                  </Button>
                )
            }
            <div className="flex flex-col items-start justify-center w-full px-6">
              <h1 className='text-[0.875rem] font-extrabold text-[--black] mb-1 ml-2'>Correo OrbitPay</h1>
              <Snippet symbol="" className='text-[0.875rem]'>pruebas.criptoven@gmail.com</Snippet>
            </div>
            <Button fullWidth className='bg-[--blue] text-[--white] my-3 text-[1rem] font-semibold'>
              Enviar Orbit
            </Button>
          </CardBody>
        </Card>
      </div>
      <div className=" w-full h-[10rem]">
      </div>
    </div>
  )
}

export default OrbitPay
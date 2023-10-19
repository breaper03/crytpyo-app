import { GrTransaction, GrHome } from "react-icons/gr"
import { GiGoblinHead } from "react-icons/gi"
import { Button } from "@nextui-org/react"
import Link from "next/link"
const Menu = () => {
  
  const menuItems = [
    {
      link: "/",
      hidden: false,
      icon: <GrHome/>,
      name: "Inicio"
    },
    {
      link: "/",
      hidden: false,

      icon: <GiGoblinHead/>,
      name: "Transacciones"
    },
    {
      link: "/",
      hidden: false,
      icon: <GrTransaction/>,
      name: "Transacciones"
    }
  ]

  return (
    <>
      <div className='w-[16.3125rem] flex flex-nowrap items-center justify-between py-6 px-8 bg-[#fafafa] mb-5 h-10 rounded-full shadow-lg'>
        {
          menuItems.map((item) => (
            <Link href={`/`} key={Math.random()} className={`${item.hidden ? "hidden":""}`}>
              <Button className={`text-2xl bg-transparent`} isIconOnly >{item.icon}</Button>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Menu
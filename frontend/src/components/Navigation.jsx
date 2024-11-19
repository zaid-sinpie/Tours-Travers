import ButtonBlack from "./ui/Buttons"
import {ButtonWhite} from "./ui/Buttons"


const Navigation = () => {
  return (
    <header className='w-full py-[.5rem] px-[2rem] text-black fixed top-0 left-0 border z-20 backdrop-blur-2xl'>
      <div className='w-full flex justify-between items-center'>
        <div>
            <h1 className='font-bold text-2xl'>LOGO</h1>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <ul>
                <ButtonBlack>LogIn</ButtonBlack>
            </ul>
            <ul>
                <ButtonWhite>SignUp</ButtonWhite>
            </ul>
        </div>
      </div>
    </header>
  )
}

export default Navigation

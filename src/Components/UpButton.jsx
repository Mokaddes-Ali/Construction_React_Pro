import { FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll'



const UpButton = () => {
  return (
    <>
    <div id="icon-box" className="fixed bottom-5 right-2 z-10">
        <button className="bg-yellow-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer ">
          <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="text-2xl"/>
          </Link>
        </button>
    </div>
    </>
  )
}

export default UpButton
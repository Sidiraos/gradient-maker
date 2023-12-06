import React,{useState , useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const PortalCode = ({onClose , style}) => {
  const [isCopied , setIsCopied] = useState(false)
  const [text , setText] = useState("Copy")
  const valuesCode = Object.values(style).join("")
  const code = "background-image : " + valuesCode

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'visible';
    }
  })
  const handleCopy = () => {
    if(isCopied) return
    if(!isCopied){
        setIsCopied(true)
        navigator.clipboard.writeText(code)
        setText("Copied")
        toast.info('🦄 Copied!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        setTimeout(() => {
            setIsCopied(false)
            setText("Copy")
          } , 1000)
    }

  }
  return (
    <div onClick={onClose} className="portal bg-slate-800/90 fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
            <ToastContainer />
            <div className=" min-w-[600px] max-w-xl min-h-[200px] mx-auto py-10 px-5 bg-slate-50 rounded-lg" onClick={e => e.stopPropagation()}>
                    <div className="flex justify-between">
                        <p className="font-bold">Here is your code 🎉</p> 
                        <div className="btn-grp">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500" onClick={handleCopy}>{text}</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 ms-2" onClick={onClose} >Close</button>
                        </div>
                    </div>

                    <div className="bg-slate-800 text-white mt-3 px-5 py-8 text-lg font-bold">
                        {code}
                    </div>

                    <div>

                    </div>
            </div>
    </div>
  )
}
export default PortalCode
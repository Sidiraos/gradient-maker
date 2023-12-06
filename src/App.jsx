import Button from "./components/Button";
import Color from "./components/Color";
import {useSelector , useDispatch} from 'react-redux';
import { changeDegree ,changePosition } from "./redux/slices/gradientValues";
import React , {useState} from "react";
import { createPortal } from "react-dom";
import PortalCode from "./components/PortalCode";

function App() {
  const dispatch = useDispatch()
  const colors = useSelector((state) => state.gradientValues.colors);
  const globalDegree = useSelector((state) => state.gradientValues.globalDegree);
  const inputGlobalDegreeValue = Math.floor(globalDegree * 100 / 360);

  const [selectedColor , setSelectedColor] = useState(colors[0].id)
  const currentPosition = colors.find((color) => color.id === selectedColor).position

  const [isClicked , setIsClicked] = useState(false);



  const style = {
    backgroundImage: `linear-gradient(${globalDegree}deg, ${colors.map((color) => color.color + " " + color.position + "%").join(",")})`,
  };


  return (
    <div className="max-w-4xl mx-auto border border-gray-400 flex flex-col-reverse sm:flex-row gap-3 pb-3 sm:p-4 text-white mt-4 min-h-screen sm:mt-20  sm:min-h-[550px]">
      <div className="pannel sm:flex-1 px-5">
          <div className="title-info mb-5">
            <h1 className="text-center text-xl">Gradient Generator</h1>
            <p className="text-center">Bring style to your apps.</p>
          </div>
          <div className="colors">
              <p className="mb-3">Colors,min 2, max 5.</p>
              {/* composant Colors */}
              <div className="colors-grp flex gap-1 sm:gap-5">
                  {
                      colors.map((color) => (
                          <Color key={color.id} value={color.color} id = {color.id} />
                      ))
                  }
              </div>
              {/* composant button */}
              <div className="btn-grp flex gap-1 mt-2">
                <Button type={"-"} selectedColorId= {selectedColor} setSelectedId = {(currentId)=> setSelectedColor(currentId)} />
                <Button type={"+"} selectedColorId= {selectedColor} setSelectedId = {(currentId)=> setSelectedColor(currentId)}/>
              </div>

              <div className="flex flex-col gap-5 mt-5">
                <p>Pick and change a Color's position</p>
                <select className="dropdown bg-slate-900 border border-gray-50/20 px-3 py-1 outline-none focus:border-gray-50/30 sm:w-[30%]" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                  {
                      colors.map((color , index) => (
                          <option className="bg-slate-900" id={color.id} key={color.id} value={color.id}>{`Color ${index +1 }`}</option>
                      ))
                  }
                </select>

                <div className="flex flex-col gap-4"> 
                   <label className="" htmlFor="position">Color's position</label>
                   <input type="range" id="position" value={currentPosition} onChange={(e) => dispatch(changePosition({id : selectedColor , position : e.target.value}))} className="outline-none h-1"/>
                </div>

                <div className="flex flex-col gap-4 mt-4"> 
                   <label className="" htmlFor="degree">Gradient global angle</label>
                   <input type="range" name="" id="degree" value={inputGlobalDegreeValue} onChange={(e) => dispatch(changeDegree(e.target.value))} className="outline-none h-1"/>
                </div>

                <button className="bg-blue-700 rounded-lg px-6 py-2 text-lg font-bold mt-5 sm:w-1/2" onClick={() => setIsClicked(true)}>
                  Get the code!
                  </button>

                  {
                    isClicked && createPortal(
                      <PortalCode onClose={() => setIsClicked(false)} style={style} />,
                      document.body
                    )
                  }

              </div>

            </div>
      </div>


      <div className="output-color sm:ring-4 sm:ring-slate-50 flex-1 min-h-[100px]" style={style}> </div>
    </div>

  )

}

export default React.memo(App)

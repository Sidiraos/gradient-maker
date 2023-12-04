import Button from "./components/Button"

function App() {
  return (
    <div className="max-w-4xl mx-auto border border-gray-400 flex p-4 text-white mt-4 sm:mt-20 min-h-[550px]">
      <div className="pannel flex-1 px-5">
          <div className="title-info mb-5">
            <h3 className="text-center">Gradient Generator</h3>
            <p className="text-center">Bring style to your apps.</p>
          </div>
          <div className="colors">
              <p className="mb-3">Colors,min 2, max 5.</p> 
              {/* composant Colors */}
              <div className="colors-grp flex gap-5">
                <input type="color" name="color" id="" value="#00D2FF" className="outline-none border-none bg-transparent h-16 w-16 cursor-pointer" />
                <input type="color" name="color" id="" value="#EE9CA7" className="outline-none border-none bg-transparent h-16 w-16 cursor-pointer" />
              </div>
              {/* composant button */}
              <div className="btn-grp flex gap-1 mt-2">
                <Button type={"-"} />
                <Button type={"+"}/>
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <p>Pick and change a Color's position</p>
                <select className="dropdown bg-slate-900 border border-gray-50/20 px-3 py-1 outline-none focus:border-gray-50/30 w-[30%]">
                  <option className="bg-slate-900" value="color1">Color 1</option>
                  <option className="bg-slate-900" value="color1">Color 2</option>
                </select>

                <div className="flex flex-col gap-4"> 
                   <label className="" htmlFor="position">Color's position</label>
                   <input type="range" name="" id="position" value={20} className="outline-none h-1"/>
                </div>
                <div className="flex flex-col gap-4 mt-4"> 
                   <label className="" htmlFor="position">Gradient global angle</label>
                   <input type="range" name="" id="position" value={50} className="outline-none h-1"/>
                </div>

                <button className="bg-blue-700 rounded-lg px-6 py-2 text-lg font-bold mt-5 w-1/2">Get the code!</button>

              </div>

            </div>
      </div>

      {/* style = {{background: "linear-gradient(${gradientGlobalAngle}deg, #00D2FF ${colorPosition}, #EE9CA7 ${colorposition})"}} */}

      <div className="output-color flex-1 ring-4 ring-slate-50" style={{background: "linear-gradient(60deg, #00D2FF 20%, #EE9CA7 50%)" }}>
   

      </div>
    </div>

  )

}

export default App

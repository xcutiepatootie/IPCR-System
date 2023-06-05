import React from 'react'

const Btndashboard = ({ handleItemClick }) => {
    return (
        <div>
           
                <div>
                    <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]" onClick={() => handleItemClick('Instruction')}>Instruction</button>
                </div>
                <div>
                    <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Research</button>
                </div>
                <div>
                    <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Extension</button>
                </div>
                <div>
                    <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Support Function</button>
                </div>
                <div>
                    <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Administrative Function</button>
                </div>
                <div>
                    <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Report Generation</button>
                </div>
          
        </div>
    )
}

export default Btndashboard
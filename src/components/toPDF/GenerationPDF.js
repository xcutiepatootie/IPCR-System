import React from 'react'

const GenerationPDF = () => {
    return (
        <div>
            <table className='w-full bg-white  border-gray-800 border-collapse'>
                <tr>
                    <td colspan="10" className="whitespace-nowrap px-4 text-right italic">
                        SPMS Form 02
                    </td>
                </tr>
                <tr>
                    <td colspan="10"
                        className="whitespace-nowrap px-4 text-right italic">
                        Date: September 2021</td>
                </tr>
                <tr>
                    <td colspan="10"
                        className="whitespace-nowrap px-4 text-right italic">
                        Revised: 03
                    </td>
                </tr>
                <tr>
                    <th colspan="10"
                        class="whitespace-nowrap px-4 py-2 text-center">
                        INDIVIDUAL PERFORMANCE COMMITMENT and REVIEW (IPCR)
                    </th>
                </tr>

            </table>
        </div>
    )
}

export default GenerationPDF
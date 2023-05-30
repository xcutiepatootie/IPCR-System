import InstructionTableForm from "./InstructionTableForm";
import ResearchTableForm from "./ResearchTableForm";
import ExtensionTableForm from "./ExtensionTableForm"
import SupportFunctionTableForm from "./SupportFunctionTableForm";
import AdministrativeFunctionsTableForm from "./AdministrativeFunctionsTableForm"
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useSession } from "next-auth/react";

const TableFormContainer = () => {

    const [selectedCollection, setSelectedCollection] = useState(null);



    const { data } = useSession()



    const handleSidebarItemClick = (option) => {
        setSelectedCollection(option)

    }

    const renderContent = () => {
        switch (selectedCollection) {
            case 'Dashboard':
                return <h1>Faculty</h1>;
            case 'Instruction':
                return <InstructionTableForm />;
            case 'Research':
                return <ResearchTableForm />;
            case 'Extension':
                return <ExtensionTableForm />;
            case 'Support':
                return <SupportFunctionTableForm />;
            case 'Administrative Functions':
                return <AdministrativeFunctionsTableForm />
            case 'Support Function':
                return <>

                    <><SupportFunctionTableForm /></>
                </>;
            default:
                return <h1>Faculty</h1>
        }
    }



    return (


        <div className="flex">
            <Sidebar handleItemClick={handleSidebarItemClick} />
            {renderContent()}
        </div>



    )
}

export default TableFormContainer;
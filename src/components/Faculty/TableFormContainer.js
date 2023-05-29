import InstructionTableForm from "./InstructionTableForm";
import ResearchTableForm from "./ResearchTableForm";
import ExtensionTableForm from "./ExtensionTableForm"
import Sidebar from "./Sidebar";
import { useState } from "react";

const TableFormContainer = () => {

    const [selectedCollection, setSelectedCollection] = useState(null);
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
                return <ExtensionTableForm />
            case 'Support Function':
                return <>

                    <><CreateUserContainer /></>
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
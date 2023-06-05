import InstructionTableForm from "./InstructionTableForm";
import ResearchTableForm from "./ResearchTableForm";
import ExtensionTableForm from "./ExtensionTableForm"
import SupportFunctionTableForm from "./SupportFunctionTableForm";
import AdministrativeFunctionsTableForm from "./AdministrativeFunctionsTableForm"
import UserList from "./ListUsers/ListFacultyUsers"
import Sidebar from "../Sidebar";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Btndashboard from "./Btndashboard";

const TableFormContainer = () => {

    const [selectedCollection, setSelectedCollection] = useState(null);
    const [selected, setSelected] = useState(false);

    const handleButtonItemClick = (option) => {
        setSelectedCollection(option)
        setSelected(true)

    }



    const handleSidebarItemClick = (option) => {
        setSelectedCollection(option)

    }

    const renderContent = () => {
        switch (selectedCollection) {
            case 'Dashboard':
                return <h1>Dean</h1>;
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
            case 'Faculty':
                return <>

                    <UserList />
                </>;
            default:
                return <h1>Dean</h1>
        }
    }



    return (
        <>
            <div className="flex">
                <Sidebar handleItemClick={handleSidebarItemClick} />

                {renderContent()}
            </div>

            <div className="flex">
            {selected ? null : <Btndashboard handleItemClick={handleButtonItemClick} />}{/*  */}
        </div >
        </>

    )
}

export default TableFormContainer;
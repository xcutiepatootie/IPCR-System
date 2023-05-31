import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Sidebar from '../Sidebar'
import { useSession, getSession } from 'next-auth/react'



const Dashboard = () => {
  const [selectedCollection, setSelectedCollection] = useState(null)
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const user = session?.user || null;

  console.log(user)



  const handleSidebarItemClick = (option) => {
    setSelectedCollection(option);
  };

  const renderContent = () => {
    switch (selectedCollection) {
      case 'Dashboard':
        return <h1>Campus Director</h1>
      case 'Manage User':
        return <ManageUserContainer />
      case 'Create New User':
        return <>

          <><CreateUserContainer /></>
        </>;
      default:
        return <h1>Campus Director</h1>
    }
  }

  return (
    <div>

      <div className="flex">
        <Sidebar handleItemClick={handleSidebarItemClick} />
        {renderContent()}
      </div>

    </div>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || session.user.role !== 'campusdirector') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

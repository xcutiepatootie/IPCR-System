import Userstable from "../SuperAdmin/Usertable"

const Superadmindashboard = ({ users }) => {
  return (
    <div>
      <h1>User List</h1>
      <Userstable users={users} />
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await axios.get('/api/users');
  const users = data || [];

  return {
    props: {
      users,
    },
  };
}


export default Superadmindashboard
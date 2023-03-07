import { useState } from "react";
import AddUser from "./component/AddUser";
import UsersTable from "./component/UsersTable";

const App = () => {
  const [isVisble, SetIsVisible] = useState(false);
  const handleOnClose = () => SetIsVisible(false);

  return (
    <>
      <h1 className="text-center text-2xl bg-opacity-30  font-bold m-4">
        Creative Buffer Assignment
      </h1>
      <div className="text-center py-3">
        <button
          onClick={() => SetIsVisible(true)}
          className="bg-blue-400 text-white px-3 py-1 rounded hover:scale-110 transition text-lg"
        >
          Add User
        </button>
      </div>
      <UsersTable />
      <AddUser onClose={handleOnClose} visible={isVisble} />
    </>
  );
};

export default App;

import { createContext } from "react";

const initialContext = { user: null, login: (user) => {}, logout: () => {} };

const UserContext = createContext(initialContext);

export default UserContext;

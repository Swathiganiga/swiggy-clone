import { createContext } from "react";

// Default value for the context
const UserContext = createContext({
  loggedInUserName: "Default user", // Default value for the context
});

export default UserContext;

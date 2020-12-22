import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import dataSchema from "../utils/graphQL_schemas/data";

export const UserContext = React.createContext({});

export const UserProvider = (props) => {
  const { loading, data } = useQuery(dataSchema);
  const user = loading ? [] : data.usersData[0];
  return <UserContext.Provider value={{ user, loading }}>{props.children}</UserContext.Provider>;
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

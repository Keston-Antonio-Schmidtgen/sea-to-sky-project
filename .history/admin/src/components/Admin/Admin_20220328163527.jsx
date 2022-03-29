import React from "react";
import { WordContext } from "../context";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
export default function Admin() {
  const { currentAdmin, setCurrentAdmin } = useContext(WordContext);
  const history = useHistory();
  const handleLogout = () => {
    setCurrentAdmin(null);}
    return
    <Sidenav />


}

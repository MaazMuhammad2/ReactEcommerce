import React, { Children, useState } from "react";
import MyContext from './MyContext'
import { useHref } from "react-router-dom";
import { useTheme } from "@material-tailwind/react";

function MyState({ children }) {
    const name = "Ali Haider Abdullah"
    const [loading, setLoading] = useState(false)
    return (
        <MyContext.Provider value={{
            loading,
            setLoading
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState
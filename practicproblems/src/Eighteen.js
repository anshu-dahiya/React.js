//Context provider that allows user to switch between Light and Dark theme
//and use context in diff. parts of the app to apply Selected theme
import React from "react";
import { useTheme } from "./ThemeContext";

export default function Eighteen(){

    const {isDarkMode,toggleTheme} = useTheme();

    return (
        <div>
            <label>
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}/ >
                Dark Mode
            </label>
        </div>
    )
}
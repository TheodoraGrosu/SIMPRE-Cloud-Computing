// pages/index.js
'use client'
import MainPage from "@/js/components/MainPage";
import NavigationBar from "@/js/components/NavigationBar";
import { AuthContextProvider } from "@/context/AuthContext";
import Login from "@/js/components/Login";


export default function Home() {
  return (
    <div>
       <Login></Login>
    </div>

  )
}
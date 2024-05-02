// pages/index.js
import MainPage from "@/js/components/MainPage";
import NavigationBar from "@/js/components/NavigationBar";


export default function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
       <MainPage/>
    </div>

  )
}
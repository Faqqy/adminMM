import LeftSideBar from './components/sideBar/leftSideBar.tsx'
import MainContent from "./components/mainContent/mainContent.tsx";
import TopBar from "./components/topBar/topBar.tsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css"
function App() {
  return (
    <div className="styled">
        <TopBar/>
        <LeftSideBar/>
        <MainContent/>

    </div>
  )
}

export default App

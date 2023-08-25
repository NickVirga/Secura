import WelcomeScreen from '../src/components/WelcomeScreen/WelcomeScreen';
import Dashboard from '../src/components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' Component={WelcomeScreen}/>
            <Route path='/dashboard' Component={Dashboard}/>
        </Routes>
        </BrowserRouter>
        );
    }
    
    export default App;
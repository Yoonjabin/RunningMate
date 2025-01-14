import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav/Nav.jsx";
import Main from "./pages/Main/Main.jsx";
import MissionMain from "./pages/Mission/Mission_main.jsx"
import MypageMain from "./pages/Mypage/Mypage_main.jsx"
import UserEdit from "./pages/Mypage/UserEdit.jsx"
import FamilyPlus from "./pages/Mypage/FamilyPlus.jsx"
import PointMain from "./pages/Point/PointMain.jsx"
import Login from "./pages/Login/login.jsx";
import SignUp from "./pages/SignUp/signup.jsx";
import SignIn from "./pages/SignUp/SignIn.jsx";
import InputFam from "./pages/Family/InputFam.jsx";
import NavUp from "./components/NavUp/NavUp.jsx";
import FamilyInfo from "./pages/Mypage/Family_Info.jsx"
import FamilyEdit from "./pages/Mypage/FamilyEdit.jsx"
import FamilyDiary from "./pages/Private/FamilyDiary.jsx";
import Family_mission from "./pages/Private/Family_mission.jsx";
import FamilyProject from "./pages/Private/FamilyProject.jsx";
import ProjectMap from "./pages/ProjectMap/ProjectMap.jsx";
import AddCom from "./pages/Mission/AddCom.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import MissionNoDetail from "./pages/Mission/Mission_noDetail.jsx"
import MissionDetail from "./pages/Mission/Mission_detail.jsx"
import MissionFinish from "./pages/Mission/Mission_finish.jsx"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<><Nav /><Main /></>} />
        <Route path='/MissionMain' element={<><Nav /><MissionMain /></>}/>
        <Route path='/Shop' element={<><Nav /><Shop /></>}/>
        <Route path='/MypageMain' element={<><Nav /><MypageMain /></>}/>
        <Route path='/UserEdit' element={<><Nav /><UserEdit /></>}/>
        <Route path='/FamilyPlus' element={<><Nav /><FamilyPlus /></>}/>
        <Route path='/PointMain' element={<><Nav /><PointMain /></>}/>
        <Route path='/signup' element={<><NavUp /><SignUp /></>} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/inputFam' element={<InputFam />} />
        <Route path='/FamilyInfo' element={<><Nav /><FamilyInfo /></>} />
        <Route path='/FamilyEdit' element={<><Nav /><FamilyEdit /></>} />
        <Route path='/FamilyDiary/:id' element={<><Nav /><FamilyDiary /></>} />
        <Route path='/Family_mission' element={<><Nav /><Family_mission /></>} />
        <Route path='/FamilyProject/:id' element={<><Nav /><FamilyProject /></>} />
        <Route path='/ProjectMap' element={<><Nav /><ProjectMap /></>} />
        <Route path='/AddCom' element={<><AddCom /></>} />
        <Route path='/MissionDetail/:id' element={<><Nav /><MissionDetail /></>}/>
        <Route path='/MissionNoDetail/:id' element={<><Nav /><MissionNoDetail /></>}/>
        <Route path='/MissionFinish' element={<MissionFinish/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

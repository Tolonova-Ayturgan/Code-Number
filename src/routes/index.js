import { Link, Route, Routes } from "react-router-dom"
import FormRegistration from "../components/registration/FormRegistration"
import InnerPage from "../pages/InnerPage"

const MainRoutes = () => {

    return (
        <>
        <Routes >
            <Route path="/" element={<FormRegistration/>} ></Route>
        </Routes>
        <Routes>
            <Route path="/InnerPage" element={<InnerPage/>}></Route>
        </Routes>
        </>
    )
}

export default MainRoutes

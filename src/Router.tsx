import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import OverviewPage from "./pages/overview/OverviewPage";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import ReservationPage from "./pages/overview/subpages/reservation/ReservationPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="overview" element={<OverviewPage />}>
                    <Route path=":reservationId" element={<ReservationPage />} />
                </Route>
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ReservationsOverviewPage from "./pages/reservations/overview/ReservationsOverviewPage";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import IssuesOverviewPage from "./pages/issues/overview/IssuesOverviewPage";
import IssueDetailPage from "./pages/issues/details/IssueDetailPage";
import ReservationDetailPage from "./pages/reservations/details/ReservationDetailPage";
import ReservationCreatePage from "./pages/reservations/create/ReservationCreatePage";
import React from "react";

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				{/* Route: / */}
				<Route path="/404" element={<NotFoundPage />}/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<HomePage />} />

				{/* Route: /reservations */}
				<Route path="/reservations/create" element={<ReservationCreatePage />} />
				<Route path="/reservations/:reservationId" element={<ReservationDetailPage />} />
				<Route path="/reservations" element={<ReservationsOverviewPage />} />

				{/* Route: /issues */}
				<Route path="/issues/:issueId" element={<IssueDetailPage />} />
				<Route path="/issues" element={<IssuesOverviewPage />} />

			</Routes>
		</BrowserRouter>
	);
}

export default Router;

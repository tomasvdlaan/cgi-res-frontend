import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TabletPage from "./pages/tablet/TabletPage";
import IssueDetailPage from "./pages/issues/details/IssueDetailPage";
import IssuesOverviewPage from "./pages/issues/overview/IssuesOverviewPage";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import ReservationCreatePage from "./pages/reservations/create/ReservationCreatePage";
import ReservationDetailPage from "./pages/reservations/details/ReservationDetailPage";
import ReservationsOverviewPage from "./pages/reservations/overview/ReservationsOverviewPage";

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				{/* Route: / */}
				<Route path="/404" element={<NotFoundPage />}/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/tablet" element={<TabletPage />} />

				{/* Route: /reservations */}
				<Route path="/reservations/create" element={<ReservationCreatePage />} />
				<Route path="/reservations/:reservationId" element={<ReservationDetailPage />} />
				<Route path="/reservations" element={<ReservationsOverviewPage />} />

				{/* Route: /issues */}
				<Route path="/issues/:issueId" element={<IssueDetailPage />} />
				<Route path="/issues" element={<IssuesOverviewPage />} />

				{/* NIET VERPLAATSEN!! */}
				<Route path="*" element={<Navigate replace to="/404" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;

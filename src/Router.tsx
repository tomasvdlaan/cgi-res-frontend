import React from "react";
import {
	BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import IssueDetailPage from "./pages/issues/details/IssueDetailPage";
import IssuesOverviewPage from "./pages/issues/overview/IssuesOverviewPage";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import CreateReservation from "./pages/reservations/create/CreateReservation";
import QrCodePage from "./pages/reservations/details/QrCodePage";
import ReservationDetailPage from "./pages/reservations/details/ReservationDetailPage";
import ReservationsOverviewPage from "./pages/reservations/overview/ReservationsOverviewPage";
import WorkspaceDetails from "./pages/workspaces/WorkspaceDetails";
import WorkspaceOverview from "./pages/workspaces/WorkspaceOverview";
import IssueCreatePage from "./pages/issues/create/issueCreatePage";

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				{/* Route: / */}
				<Route path="/404" element={<NotFoundPage />}/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<HomePage />} />

				{/* Route: /reservations */}
				<Route path="/reservations/create" element={<CreateReservation />} />
				{/* <Route path="/reservations/create" element={<ReservationCreatePage />} /> */}
				<Route path="/reservations/code/:reservationId" element={<QrCodePage />} />
				<Route path="/reservations/:reservationId" element={<ReservationDetailPage />} />
				<Route path="/reservations" element={<ReservationsOverviewPage />} />

				{/* Route: /workspaces */}
				<Route path="/workspaces" element={<WorkspaceOverview />} />
				<Route path="/workspaces/:workspaceId" element={<WorkspaceDetails />} />

				{/* Route: /issues */}
				<Route path="/issues/:issueId" element={<IssueDetailPage />} />
				<Route path="/issues/create" element={<IssueCreatePage />} />
				<Route path="/issues" element={<IssuesOverviewPage />} />

				{/* NIET VERPLAATSEN!! */}
				<Route path="*" element={<Navigate replace to="/404" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;

import {QRCodeCanvas} from "qrcode.react";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {default as config} from "../../../config.json";
import Reservation from "../../../entities/ReservationEntity";
import DateUtil from "../../../utils/DateUtil";

const QrCodePage = () => {
	const {reservationId: id} = useParams();

	const [reservation, setReservation] = useState<Reservation>();

	const refresh = () => {
		fetch(`${config.apiUrl}/reservation/${id}`, {method: "GET", mode: "cors"})
			.then((result) => result.json())
			.then((data) => {
				setReservation(data);
			});
	};

	useEffect(() => {
		refresh();
	}, []);

	return (
		<div className="bg-red-100 p-12 h-screen">
			<div className="flex flex-row bg-white rounded-xl w-full h-full">
				<div className="flex items-center justify-center flex-1">
					<QRCodeCanvas value={reservation?.secret ? reservation?.secret : ""} size={512}/>
				</div>
				<div className="flex items-center flex-1">
					<div className="flex flex-col">
						<span className="font-bold text-2xl">
							{reservation?.workspace?.title}
						</span>
						<span className="italic text-gray-400">
							{reservation?.workspace?.building?.address}
						</span>

						<span className="font-bold mt-4">Start</span>
						<span>
							{reservation?.start && DateUtil.getMinifiedDateDayString(reservation.start)} -
							{reservation?.end && DateUtil.getTimeString(reservation?.end)}
						</span>

						<span className="font-bold mt-4">Employee</span>
						<span>{reservation?.userId}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QrCodePage;

import { ClockIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/outline";


function HomePage() {
    return (
        <div className="">
            <div className="bg-light-gray p-6">

                <div className="inline-grid grid-flow-col gap-4">
                    <div>
                        <div className="text-2xl font-SofiaProBold">
                            Hello vincent
                        </div>
                        <div className="text text-gray font-SofiaProLight">
                            2 Reservations today
                        </div>
                    </div>
                    <figure className="bg-slate-100 rounded-xl dark:bg-slate-800">
                        <img className="w-10 h-10 rounded-full clear-right mx-auto" src="images/profile_picture.jpg"
                             alt=""/>
                    </figure>
                </div>
            </div>
            <div className="overflow-x-auto no-scrollbar scroll snap-x">
                <div className=" inline-grid grid-flow-col gap-4 p-6 ">
                    <div className="rounded-md bg-white p-4 drop-shadow-md snap-center">
                        <div className="text-4xl text-center font-SofiaProBold">5</div>
                        <div className="text text-center font-SofiaProBold">Mon</div>
                    </div>
                    <div className="rounded-md bg-red p-4 drop-shadow-md snap-center">
                        <div className="text-4xl text-white text-center font-SofiaProBold">6</div>
                        <div className="text text-white text-center">Thu</div>
                    </div>
                    <div className="rounded-md bg-white p-4 drop-shadow-md snap-center">
                        <div className="text-4xl text-center font-SofiaProBold">7</div>
                        <div className="text text-center font-SofiaProBold">Mon</div>
                    </div>
                    <div className="rounded-md bg-white p-4 drop-shadow-md snap-center">
                        <div className="text-4xl text-center font-SofiaProBold">8</div>
                        <div className="text text-center font-SofiaProBold">Mon</div>
                    </div>

                    <div className="rounded-md bg-white p-4 drop-shadow-md snap-center">
                        <div className="text-4xl text-center font-SofiaProBold">9</div>
                        <div className="text text-center font-SofiaProBold">Mon</div>
                    </div>
                    <div className="rounded-md bg-white p-4 drop-shadow-md snap-center">
                        <div className="text-4xl text-center font-SofiaProBold">10</div>
                        <div className="text text-center font-SofiaProBold">Mon</div>
                    </div>
                </div>
            </div>

            <div className="p-6 text text-xl text-gray font-SofiaProBold">
                Reservations
            </div>
            <div className="overflow-x-auto no-scrollbar scroll">
                <div className=" inline-grid grid-flow-col gap-4 p-6">
                    <div className="rounded-md bg-white p-12 drop-shadow-md">


                        <div className="text text-center font-SofiaProBold grid grid-cols-2 gap-0">

                            <ClockIcon className="self-center h-5 w-5 text-blue-500"/>
                            <div className="text-left">
                                12:00 <br/>
                                18:00
                            </div>
                        </div>
                        <div className="text text-center font-SofiaProBold grid grid-cols-2 gap-0">
                            <CalendarIcon className="self-center h-5 w-5 text-blue-500"/>
                            <div>
                                5 Mon
                            </div>
                        </div>
                        <div className="text text-center font-SofiaProBold grid grid-cols-2 gap-0">
                        <LocationMarkerIcon className="self-center h-5 w-5 text-blue-500"/>
                            <div>
                                A1 - F2
                            </div>
                        </div>

                    </div>
                    <div className="rounded-md bg-red p-4 drop-shadow-md">
                        <div className="text-4xl text-white text-center font-SofiaProBold">6</div>
                        <div className="text text-white text-center">Thu</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomePage;

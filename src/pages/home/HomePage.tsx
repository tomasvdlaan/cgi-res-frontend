function HomePage() {
    return (
        <div className="">
            <div className="bg-light-gray p-6">

                <div className="inline-grid grid-flow-col gap-4">
                    <div>
                        <div className="text-2xl">
                            Hello vincent
                        </div>
                        <div className="text text-gray">
                            2 Reservations today
                        </div>
                    </div>
                    <figure className="bg-slate-100 rounded-xl dark:bg-slate-800">
                        <img className="w-10 h-10 rounded-full mx-auto" src="images/Schermontwerpen.jpg" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="overflow-x-auto scroll">
                <div className=" inline-grid grid-flow-col gap-4 p-6">
                    <div className="rounded-md bg-white p-4 drop-shadow-md">
                        <div className="text-4xl text-center">5</div>
                        <div className="text text-center">Mon</div>
                    </div>
                    <div className="rounded-md bg-red p-4 drop-shadow-md">
                        <div className="text-4xl text-white text-center">6</div>
                        <div className="text text-white text-center">Thu</div>
                    </div>
                    <div className="rounded-md bg-white p-4 drop-shadow-md">
                        <div className="text-4xl text-center">7</div>
                        <div className="text text-center">Mon</div>
                    </div>
                    <div className="rounded-md bg-white p-4 drop-shadow-md">
                        <div className="text-4xl text-center">8</div>
                        <div className="text text-center">Mon</div>
                    </div>

                    <div className="rounded-md bg-white p-4 drop-shadow-md">
                        <div className="text-4xl text-center">9</div>
                        <div className="text text-center">Mon</div>
                    </div>
                    <div className="rounded-md bg-white p-4 drop-shadow-md">
                        <div className="text-4xl text-center">10</div>
                        <div className="text text-center">Mon</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage;

import React from "react";

function NotFoundPage() {
	return (
		<div className="grid bg-light-gray place-items-center h-screen">
            
			<img src={"/images/404.png"} alt="Error" />
            
       
        
			<div className="container shadow-xl px-4 py-15 rounded-full">
				<div className="flex flex-col justify-center items-center">
					<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-center">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block flex flex-col justify-center items-center text-[55px]">404</span>{" "}
								<span className="block p-3 font-medium text-gray text-[30px]">page not found</span>
							</h1>
						</div>
					</main>

					<div className="container px-5 py-7">
						<div className="flex flex-col justify-center items-center">
							<button className="btn bg-red shadow-xl rounded-full flex px-7 py-4 96rem flex flex-col justify-center items-center">Home
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
    

	);
}





export default NotFoundPage;
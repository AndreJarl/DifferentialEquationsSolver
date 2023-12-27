import hero from "../assets/hero.png"

function Hero(){
    return (
        <>
        <div id="hero" className="lg:-mt-0 sm:pt-40 lg:pt-20 mx-10 flex justify-center items-center ">
            <div className="flex justify-center items-center gap-4 flex-row sm:flex-col mb-5">
                <div className="flex gap-5 lg:flex-row sm:flex-col justify-center items-center">
                  <div className="flex sm:flex-col justify-center items-center gap-3 lg:-mt-14">
                        <p className="text-center text-4xl lg:text-5xl font-bold text-red-600 sm:m-5">DIFFERENTIAL EQUATIONS</p>
                        <p className="text-center lg:mx-14 sm:mx-4 sm:pb-2 text-base font-semibold text-gray-700">Classifications of Differential Equations, Application of Seperable Variable and many more.....</p>
                        <p className="text-center sm:text-lg font-semibold">Group 3 Final Project</p>
                        <a href="#class"><button className="bg-red-600 hover:bg-red-400 px-11 py-2 mt-2 text-xl text-white font-semibold rounded-xl">Solve Equations ></button></a>
                    </div>
                   <img className="w-64 lg:w-[500px] "  src={hero} alt="" srcset="" />
                   
                </div>
           </div>    



        </div>
        </>
    )
}

export default Hero
import hero from "../assets/hero.jpg"

function Hero(){
    return (
        <>
        <div className=" mt-16">
            <div className="flex justify-center items-center gap-4 flex-col mb-5">
                <div className="flex sm:flex-col justify-center items-center">
                   <img className="sm:w-96" src={hero} alt="" srcset="" />
                  <div className="flex flex-col justify-center items-center">
                   <p className="text-center sm:text-5xl font-bold text-red-600 sm:m-5">DIFFERENTIAL CALCULUS</p>
                   <p className="text-center sm:text-3xl font-semibold">Group 3 Final Project</p>
                   <p className="text-center sm:mx-4 sm:py-4 text-lg font-semibold text-gray-500">Classication, Elimination of Arbitrary Constants, Application of Seperable Variable and many more...</p>
                   <button className="bg-red-600 px-11 py-2 mt-2 text-xl text-white font-semibold rounded-xl">Solve Equations ></button>
                   </div>
                 
                </div>
           </div>      
        </div>
        </>
    )
}

export default Hero
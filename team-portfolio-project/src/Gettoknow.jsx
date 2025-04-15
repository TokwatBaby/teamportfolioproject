function Gettoknow() {
    return (
        <div className="aboutus flex-col justify-items-center items-center">
            <div className="relative w-3/4 mx-auto border-t-4 text-gray-600 min-h-[30rem] flex items-center justify-center">
                {/* Large faded CAREER text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                    <h1 className="career text-[20rem] lg:text-[20rem] font-bold leading-none whitespace-nowrap">
                        MEMBERS
                    </h1>
                </div>

                {/* "About Us" in front */}
                <p className="relative z-10 text-center gradient-text1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-inter font-bold">
                    GET TO KNOW US
                </p>

                
            </div>
        </div >
    );

}

export default Gettoknow
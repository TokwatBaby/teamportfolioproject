

function WelcomePage(){

    return(
        <div className="flex justify-center items-center min-h-screen ">
            <div className="flex justify-center flex-col items-center w-270 h-200">
                <p className="text-5xl text-center text-blue-400 font-inter font-semibold">Welcome to</p>
                <div className="flex justify-center items-center pb-60">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-15">
                    <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-6xl font-inter font-semibold ">DevNexus</p>
                </div>
                <p className="text-lg font-inter font-semibold ">A team composed of web developers</p>
            </div>
        </div>
    );
}

export default WelcomePage
import Image from "next/image";

const Body =() => {
    return(
        <section className="bg-gray-100 ">
            <div className= "flex justify-center flex-wrap text-black pb-24">
                <div className="basis-full md:basis-1/2  ">
                    <div className=" justify-center mt-5 md:mt-44 ml-28 ">
                        <Image  width={300} height={100}  src="/facebook.svg" alt="bav" />
                        <p className=" -mt-5 -ml-7 md:ml-8 w-5/6 md:w-full text-center md:text-left text-[24px] md:text-[28px] ">Facebook helps you connect and share with the people in your life.</p>
                    </div>
                </div>
                <div className="basis-full md:basis-1/2 text-center md:text-left border ">
                    <div className="justify-center mt-5 md:mt-32 bg-white rounded-md mx-20 md:ml-20 md:mr-40 drop-shadow-lg pb-6">
                        <form>
                            <div className="pt-4 px-3 mb-4">
                                <input type="email"  className=" border rounded-md focus:border-blue-600 focus:outline-blue-300 focus:outline-offset-2   w-full p-3 placeholder:text-gray-500 placeholder:text-lg  " placeholder="Email address or phone number" required />
                            </div>
                            <div className=" px-2 mb-6">
                                <input type="email"  className=" border rounded-md focus:border-blue-600 focus:outline-blue-300 focus:outline-offset-2   w-full p-3 placeholder:text-gray-500 placeholder:text-lg " placeholder="Password" required />
                            </div>
                            <div className="px-3 mb-3">
                                <button type="sumbit" className="  w-full px-5 py-2.5 text-center font-medium rounded-md bg-blue-600 text-white">Log In </button>
                            </div>
                            <div className="px-3 text-center mb-6 text-blue-600">
                            Forgotten password?
                            </div>
                            <hr/>
                            <div className="mt-3 px-24">
                                <button type="sumbit" className="  w-full px-4 md:px-5 py-2.5 text-center font-semibold rounded-md bg-green-500 text-white">Create New Account </button>
                            </div>
                        </form>
                    </div>
                    <div className="md:pl-32 text-centre text-sm mt-6"><span className="font-semibold">Create a Page</span> for a celebrity, brand or business.</div>
                </div>
            </div>
            
        </section>

    );
};
export default Body;
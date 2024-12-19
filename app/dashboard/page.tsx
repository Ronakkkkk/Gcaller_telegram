import styles from "./dashboard.module.css"
import Image from "next/image";
import CircularAvatar from "./components/CircularAvatar"

export default function Dashboard() {
    return ( 
        <div className="bg-black w-full h-screen text-white">
            {/* Settings Icon */}
            <div className="w-full px-6 py-11 flex justify-end">
                <div className={styles.settings}>
                    <Image
                        src="/icons/dashboard/settings.png"
                        alt="Settings"
                        height={17}
                        width={17}
                        priority
                    />
                </div>
            </div>

            {/* Profile Section */}
            <div className="w-full flex flex-col items-center space-y-4">
                <CircularAvatar 
                    src="/images/pfp.png"
                    alt="profile image"
                    size="xl"
                    className="border-2 border-[#B983FF]"
                />
                
                {/* Name and Title */}
                <div className="text-center text-2xl font-light leading-[33px] space-y-1  ">
                    <h1>Welcome Kash!</h1>
                    <p className="text-center text-sm font-normal opacity-40">(+977) 9861138955</p>
                </div>


                {/* Additional Content */}
                <div className="w-full px-6 mt-6 space-x- items-center ">
                <div className="bg-[#9747FF] opacity-30 w-20 h-6 rounded-sm flex items-center justify-center"> 
                    <p className="text-xs font-normal text-white">Personal</p>  
                </div>

                

                    {/* Quick Actions */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="bg-[#B983FF] text-white p-2 rounded-md flex flex-col items-center">
                                <Image 
                                    src="/icons/new-task.png" 
                                    alt="New Task" 
                                    width={24} 
                                    height={24} 
                                />
                                <span className="text-xs mt-1">New Task</span>
                            </button>
                            <button className="bg-gray-700 text-white p-2 rounded-md flex flex-col items-center">
                                <Image 
                                    src="/icons/calendar.png" 
                                    alt="Schedule" 
                                    width={24} 
                                    height={24} 
                                />
                                <span className="text-xs mt-1">Schedule</span>
                            </button>
                            <button className="bg-gray-700 text-white p-2 rounded-md flex flex-col items-center">
                                <Image 
                                    src="/icons/reports.png" 
                                    alt="Reports" 
                                    width={24} 
                                    height={24} 
                                />
                                <span className="text-xs mt-1">Reports</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import Image from "next/image";
import icon from './icons.png'
import '../globals.css';
export default function Header(){
    return(
    <>
    <div className='sticky top-0 z-30 w-full bg-[rgb(4,78,131)] backdrop:blur-3xl print:hidden'>
        <div className='m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[95%] xl:w-[1300px]'>
          <Image src={icon} alt="governosindh" className="color:transparent  mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px] border-none"></Image>
           <h1 className='text_shadow   font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2x1 text-[1.125rem] ' >Tuition Free Education Program on Latest Technologies</h1>
        
        
   
    <div className='flex justify-between items-center gap-4'>
        <a href='/home' className='menu-btn capitalize font-medium px-3 py-2 text-white rounded-lg  hover:text-slate-900"'>Home</a>
        <a href='/apply' className='menu-btn capitalize font-medium px-3 py-2 text-white rounded-lg  hover:text-slate-900"' >Apply</a>
        <a href='/jobs' className='menu-btn capitalize font-medium px-3 py-2 text-white rounded-lg  hover:text-slate-900"'>Jobs</a>
        <a href='/results' className='menu-btn capitalize font-medium px-3 py-2 text-white rounded-lg  hover:text-slate-900"'>Result</a>
        <a href='courses' className='menu-btn capitalize font-medium px-3 py-2 text-white rounded-lg  hover:text-slate-900"'>Courses</a>
    </div>
    </div>
    </div>
    </>
    )
}
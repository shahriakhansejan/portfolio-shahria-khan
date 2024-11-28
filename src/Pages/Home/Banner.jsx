import { FaDownload } from 'react-icons/fa';
import profile from '../../assets/Image/header.png'

const Banner = () => {
  return (
    <div className="bg-orange-50">
      <div className="max-w-5xl px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center mx-auto pb-8 md:pb-0 pt-6">
        <div className="flex-1">
            <h1 className="text-2xl font-bold dark1">Hello, I am...</h1>
            <h2 className="text-3xl my-2 font-bold text-orange-600">Shahri<span className="dark1">a K</span>han</h2>
            <p className="dark2 text-justify font-medium">Passionate and self-motivated junior web developer with a strong work ethic and eagerness to learn. Seeking a collaborative environment to enhance my skills, explore new technologies, and grow as a Full-Stack Web Developer.</p>
            <a href="https://drive.google.com/file/d/1dXqOfbARnpnid5x03urqvAZ6B1xXFsPz/view?usp=sharing" target='_blank'>
            <button className='btn mt-6 text-white hover:bg-orange-600 bg-orange-500'><FaDownload/> Resume</button>
            </a>
        </div>


        <div className='flex-1 border-b-2 border-black z-20 bottom-0'>
            <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

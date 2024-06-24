import HeroTwoImage from "./components/HeroTwoImage";
import background5 from "./assets/images/background5.png";
import background7 from "./assets/images/background7.png";
import background8 from "./assets/images/background8.png";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="mt-10 flex h-[100%] flex-col gap-2 text-xl text-white lg:mt-28 ">
        <h1 className="flex items-center justify-center  font-extrabold lg:text-5xl">
          <span className="font-extrabold text-[#5b2ed4] lg:text-5xl">
            ModuSign:
          </span>
          Break Barriers,
        </h1>
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row ">
          <h1 className="text-5xl font-bold">Live</h1>
          <p className="rounded-md bg-[#d3d2f5] px-4 py-1 font-mono font-bold text-[#585858] lg:text-4xl">
            Sign Language Translation
          </p>
        </div>
        <p className="text-center font-mono text-sm text-[#cbcbcb]">
          Revolutionize communication with real-time sign language translation.{" "}
          <br />
          Experience seamless interaction like never before.
        </p>
        <div className=" flex justify-center">
          {" "}
          <Link to="machine">
            <button className="rounded-xl bg-[#7b4ff6] px-10 py-4 text-sm text-white">
              GET STARTED
            </button>
          </Link>
        </div>
        <div className="mt-20 flex justify-center">
          <HeroTwoImage />
        </div>
        <div className="flex flex-col justify-between bg-black bg-opacity-75 bg-cover px-5 py-10 opacity-70 lg:flex-row lg:px-20">
          <div className="flex flex-col lg:mt-16">
            <h1 className="text-3xl font-normal text-[#ffffff]">Revolution</h1>
            <h2 className="text-4xl font-bold leading-10 text-[#6b3ee7]">
              Breaking Barriers <br /> Connecting Worlds
            </h2>
            <p className="mt-5 text-lg">
              Our live translator website enables seamless real-time translation
              <br />
              to and from sign language, empowering deaf individuals to <br />
              communicate effortlessly.
            </p>
            <div className="mt-10 flex gap-10">
              <div className="flex flex-col">
                <h1 className="font-semibold">Real-time</h1>
                <p className="text-[15px] font-thin leading-6">
                  Experience instant translation between <br /> sign language
                  and spoken language <br /> with our cutting-edge technology.
                </p>
              </div>

              <div className="flex flex-col">
                <h1 className="font-semibold">Effortless</h1>
                <p className="text-[15px] font-thin leading-6">
                  Communicate effortlessly with deaf <br /> individuals by
                  sending translated <br /> messages as live chat.
                </p>
              </div>
            </div>
          </div>
          <img src={background5} alt="" className="mt-2 lg:mt-0 lg:h-[500px]" />
        </div>
        <div className="mt-10 flex flex-col justify-between bg-black bg-opacity-75 bg-cover px-5 py-10 opacity-70 lg:flex-row lg:px-20">
          <img
            src="src/assets/images/background6.png"
            alt=""
            className="mt-2 lg:mt-0 lg:h-[500px]"
          />
          <div className="flex flex-col lg:mt-16 px-14">
            <h2 className="text-4xl font-bold leading-10 text-[#6b3ee7]">
              Real-time Sign <br /> Language Translation <br />
              Innovative Experience
            </h2>
            <p className="mt-5 text-lg">
              Our live translator website enables seamless real-time translation
              <br />
              to and from sign language, empowering deaf individuals to <br />
              communicate effortlessly.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between  bg-black bg-opacity-75 bg-cover px-5 py-10 opacity-70 lg:flex-row lg:px-20">
          <div className="flex flex-col lg:mt-16">
            <h2 className="text-4xl font-bold leading-10 text-[#6b3ee7]">
              Empower Deaf Users
              <br /> Revonutionary <br /> Chat System
            </h2>
            <p className="mt-5 text-lg">
              Our website features an innovative chat messaging system
              <br /> designed specifically for deaf users. Stay connected and{" "}
              <br /> communicate effortlessly with our user-friendly platform
            </p>
            <ul className="mt-10 flex list-disc flex-col gap-5  px-5">
              <li>seamless Communication</li>
              <li>Real-Time Translation</li>
              <li>Accessible and Inclusive</li>
            </ul>
          </div>
          <img
            src={background7}
            alt=""
            className="mt-2 lg:mt-0 lg:h-[500px]"
          />
        </div>
        <div className="mt-10 flex flex-col justify-between bg-black bg-opacity-75 bg-cover px-5 py-10 opacity-70 lg:flex-row lg:px-20">
          <img
            src={background8}
            alt=""
            className="mt-2 lg:mt-0 lg:h-[500px]"
          />
          <div className="flex flex-col lg:mt-16">
            <h2 className="text-4xl font-bold leading-10 text-[#6b3ee7]">
              How it works
            </h2>
            <p className="mt-5 text-lg">
              Our live translation and chat service allows you to communicate{" "}
              <br />
              seamlessly with deaf users. simply type your message , and it will{" "}
              <br /> be translated into sign language in real time.{" "}
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-10 text-[#6b3ee7]">
              Real-Time Translation
            </h2>
            <p className="mt-5 text-lg">
              Experience the power of real-time translation as your messages{" "}
              <br />
              are instantly converted into sign language and sent as a chat to
              <br />
              the deaf user.
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-10 text-[#6b3ee7]">
              Seamless Communication
            </h2>
            <p className="mt-5 text-lg">
              Breakdown communiaction barriers and have meaningful <br />
              conversations with deaf users through our seamless translation{" "}
              <br />
              and chat service.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-around bg-black bg-cover px-5 py-10 opacity-70 lg:flex-row lg:px-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-white ">MODUSIGN</h2>
            <ul className=" flex flex-col gap-2 text-sm text-white">
              <li>Customer Support</li>
              <li>08139120752</li>
              <li>08171797071</li>
              <li>No. 1 Ilofa Road GRA Ilorin.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-white">ABOUT US</h2>
            <ul className="flex flex-col gap-2 text-sm text-white">
              <li>Home</li>
              <li>Services</li>
              <li>Faq</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-white">SUPPORT</h2>
            <ul className="flex flex-col gap-2 text-sm text-white">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Investors</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2>DOWNLOAD APP</h2>
            <div className="flex flex-col gap-2">
              <img src="src/assets/images/Mobile1.png" alt="" />
              <img src="src/assets/images/Mobile2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

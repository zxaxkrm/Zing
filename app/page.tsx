"use client";
import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaFacebook, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Home() {
 
  return (
    <div className="text-[#000000] bg-[#ffffff] space-y-10 ">
      
      <section className="mt-12 md:px-40 px-4">
        <div className="md:relative">
          <div className="md:absolute top-0 left-0 tracking tracking-widest bg-[#ffffff] border border-[#d2d1d1] text-2xl font-light md:px-10  py-4">
            FEATURED POST
          </div>

          <div className="py-8">
            <div className="border border-[#d2d1d1]">
              <img src="/read.avif" alt="featured" />

              <div className="font-roboto font-light text-xs py-4 max-md:px-6 md:pl-8">
                <h1>Admin</h1>
                <p>Jan 3, 2026</p>
              </div>

              <div className="md:pl-8 mb-20 max-md:px-6">
                <h1 className="md:text-4xl text-3xl font-bold font-playfair">
                  Back to Fiction: What I&apos;m Reading This Fall
                </h1>
                <p className="font-roboto font-light hover:text-purple-400 text-sm md:pr-40">
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:border-y mb-5 mx-7 py-24 md:flex justify-between items-center md:px-40 ">
        <div className="md:text-5xl py-9 max-md:text-center text-3xl max-md:font-bold max-md:border-y  font-playfair">
          Never Miss a New Post.
        </div>

        <div className="font-roboto max-md:py-14 max-md:px-6">
          <h1 className="font-light">Enter your email*</h1>
          <div className="flex max-md:flex-col gap-3 max-md:gap-10">
            <input type="text" className="border-b" />
            <button className="border bg-[#5300bf] px-8 py-2 text-white font-thin">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="md:px-15 max-md:px-4  mb-10 min-h-dvh">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col md:px-10 pt-15 gap-10">
            <h1 className="text-2xl font-roboto font-light py-4">FOR YOU</h1>
            <div className="space-y-10">
              <div className="border border-[#d2d1d1] md:h-90 md:w-4/5 md:flex ">
              <div className="h-full md:w-3/5 ">
                <img
                  src="/scrolling.avif"
                  alt=""
                  className="h-full overflow-hidden"
                />
              </div>

              <div className=" px-8 flex justify-between py-8 flex-col ">
                <div className=" flex flex-col gap-5 justify-center font-roboto">
                  <p className="font-light text-xs ">Jan 3, 2026</p>

                  <h1 className="text-2xl font-semibold">
                    I Want To Be So Many Things...
                  </h1>

                  <p className="font-light">
                    On identity, change, and taking a different path. Create a
                    blog post subtitle that summarizes your post...
                  </p>
                </div>

                <div className="flex justify-between max-md:mt-15 border-t py-3">
                  <div className="flex gap-4">
                    <span className="font-roboto font-light text-xs">
                      0 views
                    </span>
                    <span className="font-roboto font-light text-xs">
                      0 comments
                    </span>
                  </div>

                  <div className="flex items-center font-roboto font-light text-xs">
                    <span>14</span>
                    <CiHeart />
                  </div>
                </div>
              </div>
            </div>


            <div className="border border-[#d2d1d1] md:h-90 md:w-4/5 md:flex ">
              <div className="h-full md:w-3/5 ">
                <img
                  src="/scrolling.avif"
                  alt=""
                  className="h-full overflow-hidden"
                />
              </div>

              <div className=" px-8 flex justify-between py-8 flex-col ">
                <div className=" flex flex-col gap-5 justify-center font-roboto">
                  <p className="font-light text-xs ">Jan 3, 2026</p>

                  <h1 className="text-2xl font-semibold">
                    I Want To Be So Many Things...
                  </h1>

                  <p className="font-light">
                    On identity, change, and taking a different path. Create a
                    blog post subtitle that summarizes your post...
                  </p>
                </div>

                <div className="flex justify-between max-md:mt-15 border-t py-3">
                  <div className="flex gap-4">
                    <span className="font-roboto font-light text-xs">
                      0 views
                    </span>
                    <span className="font-roboto font-light text-xs">
                      0 comments
                    </span>
                  </div>

                  <div className="flex items-center font-roboto font-light text-xs">
                    <span>14</span>
                    <CiHeart />
                  </div>
                </div>
              </div>
            </div>

            </div>
            
          </div>

          <div className="md:border-l pl-10 md:w-5/12 md:pt-15 max-md:py-6 ">
            <h1 className="text-2xl font-roboto font-light py-4 uppercase">
              Staff Pick
            </h1>

            <div className=" space-y-40">
              <div className="py-9 flex gap-4 h-10 ">
                <div className="w-1/2">
                  <img
                    src="/lovehand.webp"
                    alt="uglybook"
                    className="h-30 w-30 "
                  />
                </div>

                <h1 className="font-roboto font-bold text-lg">
                  If Discipline Feels Like Punishment, Then You&apos;re Doing It
                  Wrong
                </h1>
              </div>

              <div className="py-9 flex gap-4 h-10 ">
                <div className="w-1/2">
                  <img
                    src="/lovehand.webp"
                    alt="uglybook"
                    className="h-30 w-30 "
                  />
                </div>

                <h1 className="font-roboto font-bold text-lg">
                  If Discipline Feels Like Punishment, Then You&apos;re Doing It
                  Wrong
                </h1>
              </div>

              <div className="py-9 flex gap-4 h-10 ">
                <div className="w-1/2">
                  <img
                    src="/lovehand.webp"
                    alt="uglybook"
                    className="h-30 w-30 "
                  />
                </div>

                <h1 className="font-roboto font-bold text-lg">
                  If Discipline Feels Like Punishment, Then You&apos;re Doing It
                  Wrong
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t md:mx-10 py-10 min-h-dvh">
        <h1 className="text-4xl font-playfair text-center font-extrabold capitalize">
          Drop me a line, let me know what you think
        </h1>

        <div className="flex flex-col items-center px-4 gap-10 justify-center py-25">
          <div className="md:flex max-md:w-full gap-25 space-y-10 items-center justify-center ">
            <div>
              <h1 className="font-extralight font-roboto text-sm mb-8">
                First Name *
              </h1>
              <input type="text" name="" id="" className="border-b w-80 md:w-85" />
            </div>

            <div>
              <h1 className="font-extralight font-roboto text-sm mb-8">
                Last Name *
              </h1>
              <input type="text" name="" id="" className="border-b w-80 md:w-85" />
            </div>
          </div>

          <div>
            <h1 className="font-extralight font-roboto text-sm mb-8">
              Email *
            </h1>
            <input type="text" name="" id="" className="border-b w-80 md:w-196" />
          </div>

          <div>
            <h1 className="font-extralight font-roboto text-sm mb-8">
              Message *
            </h1>
            <input type="text" name="" id="" className="border-b w-80 md:w-196" />
          </div>

          <button className="bg-[#6600ea] px-24 py-2 text-white font-roboto font-light text-sm ">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}

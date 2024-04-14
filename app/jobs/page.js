"use client";
import { useEffect, useState } from "react";
import Button from "../components/button/Button";
import Link from "next/link";
import SearchInput from "../components/SearchInput/Search";
import CommonSelect from "../components/select";
import { getJobs } from "../utils/api";
import { FaRegBookmark } from "react-icons/fa6";
import Image from "next/image";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";

export default function Home() {
  const [totalJob] = useState(5);
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search,setKeyword] = useState('')
  const [sortby,setSortBy] = useState("all")

  useEffect(() => {
    fetchJob();
  }, [page,search,sortby]);

  const fetchJob = async () => {
    setLoading(true);
    try {
      const result = await getJobs({ page,search,created:sortby });
      setJobs(result.results);
      console.log(result.results, "resultjob");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handllePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const handlleNext = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div>
      <div className="flex wrap  justify-center items-center my-9">
        <div>
          <h1 className="relative block font-medium text-3xl text-center text-gray-800 mb-4">
            Find Jobs
          </h1>
          <span className="text-center ml-5">
            <Link href="/">Home</Link> / Jobs
          </span>
        </div>
      </div>
      <div className="bg-white py-5 md:py-8">
        <div className="relative flex wrap px-16 mx-auto max-w-1310 gap-8">
          <div className="relative w-[40%] bg-[#f5f7fc] rounded-2xl mb-8 px-8 py-10">
            <div className="mb-4">
              <p className="relative font-medium text-lg leading-6 text-gray-700 mb-5">
                Search by Keywords
              </p>
              <SearchInput placeholderText="Job Title, keywords" value={search} onChange={(value)=>setKeyword(value)} />
            </div>
            <div>
              <p className="relative font-medium text-lg leading-6 text-gray-700 mb-5">
                Location
              </p>
              <SearchInput placeholderText="City or postcode" />
            </div>
          </div>
          <div className="w-[66%]">
            <div className="flex wrap justify-between items-center mb-5">
              <div>
                <p>
                  Show <strong>{totalJob}</strong> jobs
                </p>
              </div>
              <div className="flex wrap gap-4">
                <CommonSelect
                  defaultText="Sort by (Default)"
                  options={[
                    { label: "Newest", value: "newest" },
                    { label: "Oldest", value: "oldest" },
                  ]}
                  onChange={(e)=>setSortBy(e.target.value)}
                />
                <CommonSelect
                  defaultText="All"
                  options={[
                    { label: "10 per page", value: "10" },
                    { label: "15 per page", value: "15" },
                    { label: "20 per page", value: "20" },
                  ]}
                />
              </div>
            </div>
            <div>
              {loading ? (
                <div class="animate-pulse">
                  <div class="h-40 bg-gray-200 mt-3 mb-6 rounded-[10px]"></div>
                  <div class="h-40 bg-gray-300 mb-6 rounded-[10px]"></div>
                  <div class="h-40 bg-gray-200 mb-6 rounded-[10px]"></div>
                  <div class="h-40 bg-gray-300 mb-6 rounded-[10px]"></div>
                  <div class="h-40 bg-gray-200 mb-6 rounded-[10px]"></div>
                </div>
              ) : (
                <>
                  <div>
                    {jobs.length>0 ? jobs.map((item) => (
                      <div className="relative mb-[30px] hover:shadow-lg rounded-[10px]">
                        <div className="relative h-40 pt-[32px] pr-[20px] pb-[22px] pl-[30px] bg-white border border-gray-300 rounded-[10px] transition-all duration-300">
                          <div className="flex wrap justify-between">
                            <div className="flex wrap gap-5 items-center">
                              <Image
                                src="/comapny.png"
                                width={50}
                                height={50}
                                alt="Picture of the company"
                              />
                              <div>
                                <p className="relative font-medium text-lg leading-6 text-gray-700 mb-1">
                                  {item?.title}
                                </p>
                                <div className="flex wrap gap-3 items-center opacity-45">
                                 <span className="flex wrap items-center gap-2"> <PiHandbagSimpleLight/> <span>{item?.company}</span></span>
                                 <span className="flex wrap items-center gap-2"> <CiLocationOn/><span>{item?.location}</span></span>
                                 <span className="flex wrap items-center gap-2"> <IoTimeOutline/><span>{item?.timeline}</span></span>
                                 <span className="flex wrap items-center gap-2"> <GiMoneyStack/><span>{item["max salary"]}</span></span>
                                </div>
                                <div className="text-[#1967d2] rounded-[50px] mt-3">{item?.type}</div>
                              </div>
                            </div>
                            <div className="rounded-[50%] h-[40px] w-[40px] cursor-pointer p-2 hover:bg-[#f5f7fc]">
          
                              <FaRegBookmark />
                            </div>
                          </div>
                        </div>
                      </div>
                    )):
                    <div class="h-40 bg-gray-200 mb-6 rounded-[10px] text-center flex justify-center items-center">No Job Available</div>}
                  </div>
                  <div className="flex wrap gap-3 items-center">
                    <Button
                      disabled={page === 1}
                      buttonType="secondry"
                      onClick={() => handllePrev()}
                    >
                      Prev
                    </Button>
                    {/* <p>{page}</p> */}
                    <Button buttonType="secondry" onClick={() => handlleNext()}>
                      Next
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

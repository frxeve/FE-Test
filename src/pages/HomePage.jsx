import { MdMailOutline } from 'react-icons/md'
import { MdOutlineCategory } from 'react-icons/md'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import HeroImage from '../assets/images/video_learn.svg'
import ReasonsImage1 from '../assets/images/learning_online.svg'
import ReasonsImage2 from '../assets/images/curriculum.svg'
import ReasonsImage3 from '../assets/images/educator.svg'
import bootcamps from '/public/data/bootcamp.json'
import learningPaths from '/public/data/learningpath.json'
import React, { useState, useEffect } from 'react'

const HomePage = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [dropdownValue, setDropdownValue] = useState('')
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [bootcampPage, setBootcampPage] = useState(0)
  const [learningPathPage, setLearningPathPage] = useState(0)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [bootcampsPerPage, setBootcampsPerPage] = useState(4)
  const [learningPathsPerPage, setLearningPathsPerPage] = useState(2)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setWindowSize(window.innerWidth)
      })
    }
  }, [])

  useEffect(() => {
    if (windowSize < 768) {
      setBootcampsPerPage(8)
      setLearningPathsPerPage(4)
    } else {
      setBootcampsPerPage(4)
      setLearningPathsPerPage(2)
    }
  }, [windowSize])

  // Bootcamp data for the current page
  const displayedBootcamps = bootcamps.slice(
    bootcampPage * bootcampsPerPage,
    bootcampPage * bootcampsPerPage + bootcampsPerPage
  )

  // Learning path data for the current page
  const displayedPaths = learningPaths.slice(
    learningPathPage * learningPathsPerPage,
    learningPathPage * learningPathsPerPage + learningPathsPerPage
  )

  const handleClearEmail = () => setEmail('')
  const handleClearMessage = () => setMessage('')

  // const itemsPerPage = 4;
  // const totalPages = Math.ceil(bootcamps.length / itemsPerPage);

  const handleBootcampPrev = () => {
    setBootcampPage((prev) =>
      prev > 0 ? prev - 1 : Math.ceil(bootcamps.length / bootcampsPerPage) - 1
    )
  }

  const handleBootcampNext = () => {
    setBootcampPage((prev) =>
      prev < Math.ceil(bootcamps.length / bootcampsPerPage) - 1 ? prev + 1 : 0
    )
  }

  const handleLearningPathPrev = () => {
    setLearningPathPage((prev) =>
      prev > 0
        ? prev - 1
        : Math.ceil(learningPaths.length / learningPathsPerPage) - 1
    )
  }

  const handleLearningPathNext = () => {
    setLearningPathPage((prev) =>
      prev < Math.ceil(learningPaths.length / learningPathsPerPage) - 1
        ? prev + 1
        : 0
    )
  }

  return (
    <div className="homepage bg-[#F1F6F9] ">
      {/* Section 1 */}
      <div className="container mx-auto px-4">
        <div className="hero flex md:flex-row flex-col-reverse items-center gap-20 pt-32">
          <div className="box md:w-1/2 w-full ">
            <h1 className="lg:text-5xl/tight text-3xl font-regular mb-7 text-[#14274E]">
              Upgrade skill Anda hari ini!
            </h1>
            <p className="text-base/6 mb-7 text-[#14274E]">
              Yuk, mulai belajar di A<span className="font-bold ">plus</span>!
              Temukan berbagai materi menarik dan pelajari keterampilan baru
              untuk mendukung perkembangan diri Anda. Belajar jadi lebih mudah
              dan menyenangkan bersama kami!
            </p>
            <a
              href="#"
              className="bg-[#14274E] hover:bg-[#213662] text-white py-3 px-6 rounded-[3px]"
            >
              Belajar Sekarang
            </a>
          </div>
          <div className="box md:w-1/2 w-full">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto md:m-0"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="reasons grid grid-cols-1 md:grid-cols-3 gap-0 pt-20">
        {/* Box 1 */}
        <div className="box text-start bg-white m-0 p-0">
          <div className="title text-[22px] mb-4 text-[#14274E] font-medium px-6 pt-4 pb-2">
            Belajar lebih flexibel
          </div>
          <img
            src={ReasonsImage1}
            alt="flexible"
            className="mx-auto mb-4 w-full h-[220px]"
          />
          <p className="text-base text-white bg-[#14274E] px-6 py-4">
            Belajar kapan pun, di mana pun, secara mandiri. Bebas memilih kelas
            sesuai minat belajar.
          </p>
        </div>

        {/* Box 2 */}
        <div className="box text-start bg-[#F8F8F8] ">
          <div className="title text-[22px] mb-4 text-[#14274E] font-medium px-6 pt-4 pb-2">
            Materi ter-up to date
          </div>
          <img
            src={ReasonsImage2}
            alt="up-to-date"
            className="mx-auto mb-4 w-full h-[220px]"
          />
          <p className="text-base bg-[#6BFFBF] text-[#262627] px-6 py-4">
            Kurikulum dikembangkan bersama perusahaan dan pemilik teknologi
            dunia sesuai kebutuhan industri terkini.
          </p>
        </div>

        {/* Box 3 */}
        <div className="box text-start bg-white  ">
          <div className="title text-[22px] mb-4 text-[#14274E] font-medium px-6 pt-4 pb-2">
            Mentor berpengalaman
          </div>
          <img
            src={ReasonsImage3}
            alt="experienced mentor"
            className="mx-auto mb-4 w-full h-[220px]"
          />
          <p className="text-base text-white bg-[#14274E] px-6 py-4">
            Pengajar dengan pengalaman nyata sebagai praktisi mampu membuat Anda
            lebih mengenal industri.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bootcamp bg-white mt-20 py-20">
        <h1 className="text-center text-[32px] font-medium gap-1">Bootcamp</h1>
        <p className="text-center text-black text-regular text-[24px] mx-[72px] mb-10">
          Bergabunglah dengan bootcamp kami dan tingkatkan keterampilan Anda ke
          level berikutnya! Jangan lewatkan kesempatan untuk belajar dan
          berkembang bersama para ahli di industri.
        </p>
        <p className="text-end text-[#14274E] text-bold text-[14px] mr-[72px] mb-4">
          Lihat Selengkapnya
        </p>
        <div className="bootcamp-box md:grid md:grid-cols-4 flex md:px-20 px-10 md:gap-4 gap-10 overflow-x-scroll scrollbar-hidden">
          {displayedBootcamps.map((bootcamp) => (
            <div key={bootcamp.id} className="box shadow-md">
              <div className="md:w-full w-[300px]">
                <img
                  src={bootcamp.img}
                  alt={bootcamp.title}
                  className="w-full h-60 object-cover"
                />
                <div className="text-start p-4 bg-[#14274E] h-32 relative">
                  <h3 className="text-xl font-medium text-white">
                    {bootcamp.title}
                  </h3>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-sm text-[#6BFFBF]">{bootcamp.batch}</p>
                    <p className="text-sm text-white">{bootcamp.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex absolute right-10 mt-4 gap-2 px-10">
          <button
            className={`p-[12px_16px] rounded-[5px] flex items-center justify-center ${
              bootcampPage > 0
                ? 'bg-[#14274E] text-white hover:opacity-100'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            style={{ width: '56px', height: '48px' }}
            onClick={handleBootcampPrev}
            disabled={bootcampPage === 0}
          >
            &lt;
          </button>

          <button
            className={`p-[12px_16px] rounded-[5px] flex items-center justify-center ${
              bootcampPage < Math.ceil(bootcamps.length / bootcampsPerPage) - 1
                ? 'bg-[#14274E] text-white hover:opacity-100'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            style={{ width: '56px', height: '48px' }}
            onClick={handleBootcampNext}
            disabled={
              bootcampPage ===
              Math.ceil(bootcamps.length / bootcampsPerPage) - 1
            }
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <div className=" w-full md:px-20 px-10 py-20 gap-[72px]">
        <p className="text-end text-[#14274E] text-bold text-[14px] mb-4">
          Lihat Selengkapnya
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-left text-[#262627] mb-10 sm:mb-0 md:w-1/2 w-full">
            <h1 className="text-[32px] font-medium">Learning Path</h1>
            <p className="text-regular text-[24px] text-black mb-10 mt-4">
              Mulailah perjalanan belajar Anda di Learning Path Aplus!
              Tingkatkan pengetahuan dan keterampilan dengan panduan terstruktur
              untuk mencapai tujuan Anda. Yuk, belajar bersama sekarang!
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="flex overflow-x-scroll scrollbar-hidden md:grid md:grid-cols-2 gap-4">
              {displayedPaths.map((path) => (
                <div key={path.id} className="box shadow-md">
                  <div className="md:w-full w-[300px] relative">
                    <img
                      src={path.img}
                      alt={path.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 flex items-end justify-center pb-[24px]">
                      <p className="text-[22px] font-medium text-white px-6 py-2 w-full text-center whitespace-nowrap">
                        {path.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-end gap-2 mt-4">
          <button
            className={`p-[12px_16px] rounded-[5px] flex items-center justify-center ${
              learningPathPage > 0
                ? 'bg-[#14274E] text-white hover:opacity-100'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={handleLearningPathPrev}
            disabled={learningPathPage === 0}
          >
            &lt;
          </button>

          <button
            className={`p-[12px_16px] rounded-[5px] flex items-center justify-center ${
              learningPathPage <
              Math.ceil(learningPaths.length / learningPathsPerPage) - 1
                ? 'bg-[#14274E] text-white hover:opacity-100'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={handleLearningPathNext}
            disabled={
              learningPathPage ===
              Math.ceil(learningPaths.length / learningPathsPerPage) - 1
            }
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Section 5 */}
      <div className="contact bg-white mt-20 py-20">
        <h1 className="text-center text-[32px] font-medium gap-1">
          Tunggu apa lagi?
        </h1>
        <p className="text-center px-10 text-[24px] font-regular mb-10">
          Tingkatkan skill Anda dengan Aplus. Hubungi kami untuk informasi lebih
          lanjut
        </p>

        <div className="flex flex-col item-center">
          <form className="w-full space-y-4 px-5">
            <div className="flex flex-col sm:flex-row gap-[16px] ">
              {/* Email Input */}
              <div className="relative flex items-center md:w-1/2 w-full ">
                <MdMailOutline
                  size={25}
                  color="#AFB1B6"
                  className="absolute pointer-events-none left-4"
                />
                <input
                  type="email"
                  className="h-[44px] pl-12 w-full bg-white rounded-lg border border-gray-300
                          text-[#262627] focus:outline-none"
                  placeholder="Masukkan email Anda"
                  onFocus={() => setEmail('julia07@gmail.com')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email && (
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-500"
                    onClick={handleClearEmail}
                  >
                    &#x2715; {/* Icon X */}
                  </button>
                )}
              </div>

              {/* Dropdown */}
              <div className="relative space-y-4 md:w-1/2 w-full">
                <div
                  className="flex  items-center border border-gray-300 
                rounded-md w-full h-[44px] text-[#262627] "
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <MdOutlineCategory
                    size={25}
                    color="#AFB1B6"
                    className="absolute pointer-events-none left-4"
                  />
                  <span className="pl-12">
                    {dropdownValue || 'Pilih kategori'}
                  </span>
                  <button
                    type="button"
                    className="absolute right-4 top-3 text-gray-500"
                    onClick={handleClearEmail}
                  >
                    {' '}
                    {dropdownOpen && <FaChevronUp />}
                    {!dropdownOpen && <FaChevronDown />}
                  </button>
                </div>

                {dropdownOpen && (
                  <ul className="absolute top-[28px] left-0 z-10 w-full border border-gray-300 rounded-md bg-white text-[#262627]">
                    <li
                      className="py-2 px-4 hover:bg-[#213662] hover:text-white cursor-pointer"
                      onClick={() => {
                        setDropdownValue('Langganan')
                        setDropdownOpen(false)
                      }}
                    >
                      Langganan
                    </li>
                    <li
                      className="py-2 px-4 hover:bg-[#213662] hover:text-white cursor-pointer"
                      onClick={() => {
                        setDropdownValue('Corporate')
                        setDropdownOpen(false)
                      }}
                    >
                      Corporate
                    </li>
                  </ul>
                )}
              </div>
            </div>

            {/* Pesan */}
            <div className="relative items-center ">
              <textarea
                className="border border-gray-300 rounded-md w-full h-[100px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Pesan"
                value={message}
                onFocus={() => setMessage('Saya ingin berlangganan nama_brand')}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              {message && (
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500"
                  onClick={handleClearMessage}
                >
                  &#x2715; {/* Icon X */}
                </button>
              )}
            </div>
          </form>

          {/* Kirim Button */}
          <div className="flex justify-end mt-4 ">
            <button
              type="submit"
              className="bg-[#213662] text-white h-[48px] w-[102px] py-2 px-4 rounded-md hover:bg-[#213662] mt-4 mr-4 justify-end"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

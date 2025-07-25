const Banner = ({title, bgImage}) => {
    return(
        <div className="bg-zinc-400 md:h-[50vh] h-[35vh] mt-25 flex justify-center items-center bg-center bg-cover relative" 
        style={{backgroundImage: `url(${bgImage})`}}>
            <h2 className="md:text-5xl text-4xl text-zinc-800 rounded-xl p-3 bg-white font-bold z-10">{title}</h2>
            <div className="bg-black/50 inset-0 absolute"></div>
        </div>
    )
}

export default Banner
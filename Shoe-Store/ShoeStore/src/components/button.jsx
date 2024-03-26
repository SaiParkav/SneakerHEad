

const button = ({lable, iconURL}) => {
  return (
      <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-slate-600 rounded-full text-white border-slate-600 ">
        {lable}
       

        <img 
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full
        w-5 h-5"
        />
      </button>
  )
}

export default button


const PagesHeader = ({ title }: { title: string }) => {
    return (
        <div className="w-full teko bg-[#000] h-[200px] lg:h-[300px] flex items-center justify-center">
            <h2 className="text-[32px] lg:text-[50px] text-white font-bold uppercase">{title}</h2>
        </div>
    )
}

export default PagesHeader
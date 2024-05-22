import { Button } from "../ui/button"

const Offer = () => {
    return (
        <div className="h-[350px] mt-16" style={{ backgroundImage: 'url("https://themewagon.github.io/fitnessclub/assets/img/gallery/section_bg02.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-[1200px] mx-auto h-full flex items-center justify-between">
                <h3 className="text-[60px] w-[570px] leading-snug font-bold text-white">June membership offer available Now</h3>
                <Button className='rounded-none text-lg uppercase px-8 md:px-12 py-4 md:!py-7' size={'lg'}>More Services</Button>
            </div>
        </div>
    )
}

export default Offer
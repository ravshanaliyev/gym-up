import { Button } from '../ui/button'

const Header = () => {
    return (
        <div className='teko h-[600px] md:h-[800px] bg-black w-full flex justify-start items-center' style={{ backgroundImage: 'url("https://themewagon.github.io/fitnessclub/assets/img/hero/h1_hero.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <div className=" flex flex-col justify-start w-full  md:w-[670px] md:ml-12">
                    <div className="flex items-center gap-4 text-[#ff1313]">
                        <div className='h-[3px] w-[50px] md:w-[100px] bg-[#ff1313] '></div>
                        <h3 className='uppercase  sm:text-xl md:text-2xl'>With patrick potter</h3>
                    </div>
                    <h1 className='text-white text-[36px]  md:text-[70px] font-bold uppercase leading-snug my-4'>Build Perfect body Shape for good and Healthy life.</h1>
                    <div>
                        <Button className='rounded-none text-lg md:text-xl uppercase px-8 md:px-12 py-4 md:!py-7' size={'lg'}>Became a Member</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
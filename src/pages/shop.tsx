import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import PagesHeader from "@/components/shared/pages-header"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Shop = () => {
    return (
        <div>
            <Navbar />
            <PagesHeader title={'Shop'} />
            <div className="sm:my-[40px] barlow md:my-[60xp] lg:my-[80px] w-full p-6 lg:p-0 lg:w-[1200px] mx-auto">
                <div className="block  md:flex w-full gap-6 items-center justify-between mb-8">
                    <Select>
                        <SelectTrigger className="py-6 text-base">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectGroup >
                                <SelectItem className="text-base" value="apple">Apple</SelectItem>
                                <SelectItem className="text-base" value="banana">Banana</SelectItem>
                                <SelectItem className="text-base" value="blueberry">Blueberry</SelectItem>
                                <SelectItem className="text-base" value="grapes">Grapes</SelectItem>
                                <SelectItem className="text-base" value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Input className="py-6 mt-4 lg:mt-0 text-base" type="text" placeholder="Search a product" />
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
                    <div className="w-[300px] border p-3 rounded-xl hover:shadow-xl transition cursor-pointer">
                        <img className="w-full h-[260px]" src="https://m.media-amazon.com/images/I/71WYhvuQfbL._AC_UL480_FMwebp_QL65_.jpg" alt="product" />
                        <h3 className="text-xl mt-4">Vinsguir Ab Roller Wheel</h3>
                        <p className="text-xl mt-1 mb-3">120 000 <span className="text-[#808080] text-lg">UZS</span></p>
                    </div>
                    <div className="w-[300px] border p-3 rounded-xl hover:shadow-xl transition cursor-pointer">
                        <img className="w-full h-[260px]" src="https://m.media-amazon.com/images/I/71WYhvuQfbL._AC_UL480_FMwebp_QL65_.jpg" alt="product" />
                        <h3 className="text-xl mt-4">Vinsguir Ab Roller Wheel</h3>
                        <p className="text-xl mt-1 mb-3">120 000 <span className="text-[#808080] text-lg">UZS</span></p>
                    </div>
                    <div className="w-[300px] border p-3 rounded-xl hover:shadow-xl transition cursor-pointer">
                        <img className="w-full h-[260px]" src="https://m.media-amazon.com/images/I/71WYhvuQfbL._AC_UL480_FMwebp_QL65_.jpg" alt="product" />
                        <h3 className="text-xl mt-4">Vinsguir Ab Roller Wheel</h3>
                        <p className="text-xl mt-1 mb-3">120 000 <span className="text-[#808080] text-lg">UZS</span></p>
                    </div>
                    <div className="w-[300px] border p-3 rounded-xl hover:shadow-xl transition cursor-pointer">
                        <img className="w-full h-[260px]" src="https://m.media-amazon.com/images/I/71WYhvuQfbL._AC_UL480_FMwebp_QL65_.jpg" alt="product" />
                        <h3 className="text-xl mt-4">Vinsguir Ab Roller Wheel</h3>
                        <p className="text-xl mt-1 mb-3">120 000 <span className="text-[#808080] text-lg">UZS</span></p>
                    </div>
                    <div className="w-[300px] border p-3 rounded-xl hover:shadow-xl transition cursor-pointer">
                        <img className="w-full h-[260px]" src="https://m.media-amazon.com/images/I/71WYhvuQfbL._AC_UL480_FMwebp_QL65_.jpg" alt="product" />
                        <h3 className="text-xl mt-4">Vinsguir Ab Roller Wheel</h3>
                        <p className="text-xl mt-1 mb-3">120 000 <span className="text-[#808080] text-lg">UZS</span></p>
                    </div>
                    <div className="w-[300px] border p-3 rounded-xl hover:shadow-xl transition cursor-pointer">
                        <img className="w-full h-[260px]" src="https://m.media-amazon.com/images/I/71WYhvuQfbL._AC_UL480_FMwebp_QL65_.jpg" alt="product" />
                        <h3 className="text-xl mt-4">Vinsguir Ab Roller Wheel</h3>
                        <p className="text-xl mt-1 mb-3">120 000 <span className="text-[#808080] text-lg">UZS</span></p>
                    </div>
                    <div className="w-[300px] border p-3 rounded-xl hover:shadow-xl transition cursor-pointer">
                        <img className="w-full h-[260px]" src="https://m.media-amazon.com/images/I/71WYhvuQfbL._AC_UL480_FMwebp_QL65_.jpg" alt="product" />
                        <h3 className="text-xl mt-4">Vinsguir Ab Roller Wheel</h3>
                        <p className="text-xl mt-1 mb-3">120 000 <span className="text-[#808080] text-lg">UZS</span></p>
                    </div>
                    <div className="w-[300px] border p-3 rounded-xl hover:shadow-xl transition cursor-pointer">
                        <img className="w-full h-[260px]" src="https://m.media-amazon.com/images/I/71WYhvuQfbL._AC_UL480_FMwebp_QL65_.jpg" alt="product" />
                        <h3 className="text-xl mt-4">Vinsguir Ab Roller Wheel</h3>
                        <p className="text-xl mt-1 mb-3">120 000 <span className="text-[#808080] text-lg">UZS</span></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shop
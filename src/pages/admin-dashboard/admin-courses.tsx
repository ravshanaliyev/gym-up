import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"


const invoices = [
    {
        img: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
        title: 'React Bootcamp',
        price: "$250.00",
        totalLessons: "10",
        totalSold: "5",
    },
    {
        img: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
        title: 'React Bootcamp',
        price: "$250.00",
        totalLessons: "10",
        totalSold: "5",
    },
    {
        img: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
        title: 'React Bootcamp',
        price: "$250.00",
        totalLessons: "10",
        totalSold: "5",
    },
    {
        img: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
        title: 'React Bootcamp',
        price: "$250.00",
        totalLessons: "10",
        totalSold: "5",
    },
    {
        img: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
        title: 'React Bootcamp',
        price: "$250.00",
        totalLessons: "10",
        totalSold: "5",
    },
    {
        img: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
        title: 'React Bootcamp',
        price: "$250.00",
        totalLessons: "10",
        totalSold: "5",
    },
    {
        img: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
        title: 'React Bootcamp',
        price: "$250.00",
        totalLessons: "10",
        totalSold: "5",
    },
]

const AdminCourses = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">My Courses</h3>
                <Link to="/admin/add-course"><Button className="bg-[#3c50e0] hover:bg-[#3c50e0] hover:bg-opacity-90 text-white">Add Course</Button></Link>
            </div>
            <div className="my-6">
                <Table className="">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Total Lessons</TableHead>
                            <TableHead>Total Sold</TableHead>
                            <TableHead className="text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                            <TableRow key={index}>
                                <TableCell><Link to={`${index}`}><img className="w-24" src={invoice.img} alt="" /></Link></TableCell>
                                <TableCell><Link to={`${index}`}>{invoice.title}</Link></TableCell>
                                <TableCell>{invoice.price}</TableCell>
                                <TableCell>{invoice.totalLessons}</TableCell>
                                <TableCell>{invoice.totalSold}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2 items-center justify-center">
                                        <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Eye className="h-[18px] w-[18px]" /></Button>
                                        <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Pencil className="h-4 w-4" /></Button>
                                        <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Trash2 className="h-4 w-4" /></Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default AdminCourses
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
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
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Total Lessons</TableHead>
                            <TableHead>Total Sold</TableHead>
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
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    )
}

export default AdminCourses
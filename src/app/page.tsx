import Link from "next/link"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,

} from "@/components/ui/sheet"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default async function Home() {
  let res = await fetch('https://simple-books-api.glitch.me/books')
  let data = await res.json()
  return (
    <main className="bg-slate-400 h-screen">
      <h1 className="text-6xl text-center">Welcome To Hasnain&apos;s Coding World</h1><br />
      <h1 className="text-9xl text-center ">Using Shadcn.ui </h1>
      <p className="text-center mt-[100px]">I can Import this Menu Bar From Shadcn.ui</p>
      <div className="flex justify-center ">
        <Sheet>
          <SheetTrigger> <Menu /></SheetTrigger>
          <SheetContent>
            <h1 className="text-3xl font-bold">Books Detailes</h1>
            {
              data.map((item: any) => {
                return (
                  <div key={item.id}>
                    <li>{`Book Name: ${item.name.toUpperCase()}`} </li>
                    <li>{`Book Type: ${item.type.toUpperCase()}`}</li><br />
                  </div>
                )
              })
            }
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex justify-center mt-32">
        <Card >
          <CardHeader>
            <CardTitle>This is Hasnain Ali</CardTitle>
            <CardDescription>Demo Project For practicing Shadcn.ui</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This Card IS Import From ShadCn.ui <br /> Using Npm commad You Can Import Multiple <br /> Things From This Library Click The Link <br />Below To Explore This Library And <br /> Make Your Code Very Easy</p>
            <Link href='https://ui.shadcn.com/' target="_blank" className="text-purple-500 mt-8">Click Here To Explore Shadcn.ui</Link>
          </CardContent>
          <CardFooter>
            <p>Thanks Shadcn.ui for Making My Code Easy</p>
          </CardFooter>
        </Card>

      </div>
    </main>
  )
}

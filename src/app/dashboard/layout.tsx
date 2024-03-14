import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen w-screen">
            {/*include shared UI here e.g. a header or sidebar*/}
            <Sidebar/>


            <div className="flex h-full w-full flex-col bg-[#D9D9D9]">
            <Header/>
                {children}
            </div>
        </div>
    )
}

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="grid grid-cols-5 h-screen bg-slate-50">

            <div className="row-[1/15]">
				<Sidebar/>
			</div>
			<div className="col-[2/6] row-[1/3]">
				<Header/>
			</div>
			<div className="col-[2/6] row-[3/14]">
                {children}
			</div>
			<div className="col-[2/6] row-[14/15]">
				<Footer/>
			</div>
            {/*include shared UI here e.g. a header or sidebar*/}
            

        </div>
    )
}

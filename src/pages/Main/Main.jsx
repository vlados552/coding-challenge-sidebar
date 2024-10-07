import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function Main() {
    return (
        <>
            <Header />
            <div className="lg:w-full flex flex-row lg:gap-8 lg:px-40 lg:py-4">
                <Sidebar />
                <h1 className="text-center">Main page</h1>
            </div>
        </>
    );
}

export default Main;

import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <RouterProvider router={router} />
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                theme="dark"
            />
        </div>
    );
}

export default App;

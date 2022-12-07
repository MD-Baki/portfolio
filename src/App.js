import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
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

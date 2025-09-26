import "./globals.css";
import {Toaster} from "react-hot-toast";

const RootLayout =({
    children
}: {
    children: React.ReactNode;
})=>{
    return(
        <html lang='en'>
          <body className="font-poppins antialiased">
            {children}
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style:{
                        background: "#063c28",
                        color: "#fff",
                        fontWeight: "bold",
                    },
                }}
            />
        </body>
        </html>
    )
};

export default RootLayout;
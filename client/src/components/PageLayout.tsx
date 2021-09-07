import React, {ReactNode} from 'react'
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default function PageLayout({children}: {children: ReactNode}) {
    return (
        <div style={{
            display: "grid"
        }}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
    }

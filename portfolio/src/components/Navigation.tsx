import React from "react"
import { NavigationElementProps } from "@/types"
import NavigationElement from "./NavigationElement"

const Navigation: React.FC = () => {
    const items = ['About me', 'Photos', 'Portfolio', 'Contact Me', 'Comic']

    return <section>
        <nav>
            <ul>
                {items.map((item) => 
                    <NavigationElement text={item}></NavigationElement>
                )}
            </ul>
        </nav>
    </section>
}

export default Navigation
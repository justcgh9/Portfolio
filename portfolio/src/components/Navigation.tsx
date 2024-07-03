import React from "react"
import { NavigationElementProps } from "@/types"
import NavigationElement from "./NavigationElement"
import '../styles/navigation.css'
import { NavigationProps } from "@/types"

const Navigation: React.FC<NavigationProps> = ({setActive}: NavigationProps) => {
    const items = ['About me', 'Photos', 'Portfolio', 'Contact Me', 'Comic']

    return <section className="navigation">
        <nav className="menu">
            <ul>
                {items.map((item) => 
                    <NavigationElement text={item} setActive={setActive}></NavigationElement>
                )}
            </ul>
        </nav>
    </section>
}

export default Navigation
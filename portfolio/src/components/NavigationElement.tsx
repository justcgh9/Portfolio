import React from "react"
import { NavigationElementProps } from "@/types"

const NavigationElement: React.FC <NavigationElementProps> = ({text}: NavigationElementProps) => {
    return <li>
        <a className="block font-league-gothic text-[5vmin] no-underline uppercase text-menu py-2 transform scale-95 opacity-50 transition-transform transition-opacity duration-550 ease-linear">
            {text}
        </a>
    </li>
}

export default NavigationElement
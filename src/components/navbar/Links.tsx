import AnchorLink from "react-anchor-link-smooth-scroll";
import { gymContextType, useGymContext } from "../../contexts/gymContext";
import { Pages } from "../../shared/types";

type Props = {
    children: string
}

const Links = ({children}: Props) => {
    const {selectedPage, setSelectedPage} = useGymContext() as gymContextType
    const lowerCasePage = children.toLowerCase().replace(/ /g , "") as Pages

  return (
    <AnchorLink
    className={selectedPage === lowerCasePage ? "text-box-secondary" : ""}
    onClick={() => setSelectedPage(lowerCasePage)}
    href={`#${lowerCasePage}`}
    >
        {children}
    </AnchorLink>
  )
}

export default Links
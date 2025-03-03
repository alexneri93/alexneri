import heart from "../../assets/heart.png";
import Text from '../atoms/Text'

function Footer() {
    return (
        <footer className="lg:mt-25 lg:mb-20 px-5">
            <Text size="small">Built with <img className="inline" src={heart} alt="Love" width="20" height="20"/></Text>
            <Text size="small">Using Vite with React and TailwindCSS.</Text>
        </footer>
    )
}

export default Footer;
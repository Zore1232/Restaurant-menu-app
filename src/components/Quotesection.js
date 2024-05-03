import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection(){

    return (
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>Food is everything we are. It's an extention of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. it's inseparable form those from the get go.</p>
            <p className="quote-author">- Anthony Bourdain</p>
        </div>
    )
}
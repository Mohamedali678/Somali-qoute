
import {React, useState} from "react"
import Header from "./components/Header"
function SomaliQuote(){

    const [index, setIndex] = useState(0)

    const xigmad = [
        "1. Maroodiga takarta saaran ma arkee kan kale tan saaran ayuu arkaa",
        "2. Beentaada hore runtaada danbay u baas baxdaa ",
        "3. Ama afeef hore lahow, ama adkeysi dambe lahow ",
        "4. Dheri ninkii ag jooga ayaa lafta kala baxa ",
        "5. Geeljire geela waa wada jiraa, waana kala jiraa ",
        "6. Abaal nin gala waa la arkay, nin gudase lama arag",
        "7. Booraan hadimo ha qodin, ku dhici doontaana mooye",
        "8. Belaayo intay kaa maqan tahay, qayrkaa bay ku maqan tahay",
        "9. Col kaa badan iyo biyo kaa badanba way ku hafiyaan",
        "10. Wadiiqada yari waddada weyn bay kugu riddaa "
    ]

    const nextBtn = () => {
        if(index < xigmad.length - 1){
            setIndex(index + 1)
        }
    }

    const previousBtn = () => {
        if(index > 0){
            setIndex(index - 1)
        }
    }

    return <div>
        <Header />
        <p className="text-center mt-10 text-4xl"> {xigmad[index]} </p>

        <div className="flex justify-center gap-10 mx-40 mt-60 sm:justify-between" >
            <button className="bg-blue-500 text-white  p-3 rounded" onClick={previousBtn}>Previous</button>
            <button className="bg-blue-500 text-white px-6 rounded" onClick={nextBtn}>Next</button>
        </div>


    </div>
}

export default SomaliQuote
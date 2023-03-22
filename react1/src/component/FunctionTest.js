// detta är en functional component, vi använder return för att kunna skriva JSX



const hello = 'FEU22'

// En funktion som returnerar ett värde i form av sträng
const displayMessage = () => {
    return "Vad kul det ska bli"
}

// sätt divvar (fragmentering: <></> man kan även skriva fragment) runt sin HTML kod enligt branschstandard
function FunctionTest() {
    return (
    <>
        <h1 className="title">{hello + ' ' + displayMessage()}{1+1}</h1>
    </>
    );
}

export default FunctionTest;

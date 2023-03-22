// detta är en functional component med 2st props med två inhämtningar
function FunctionalProps2(props) {
    return ( <h2>Detta är också en komponent som hämtar props, i detta fallet 2st:
        {props.first}{props.last}

        </h2> );
}

export default FunctionalProps2;

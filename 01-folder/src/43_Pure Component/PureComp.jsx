import Guest from "./Guest";

function PureComp(){
    return(
        <>
            <Guest guest={1} />
            <Guest guest={3} />
            <Guest guest={5} />
        </>
    )
}

export default PureComp;
// let guest=0;

function GuestTea(){

    return(
        <h1>keeping</h1>
    )

}
const Guest=({guest})=>{
    // guest=guest+1;
    return(
        <>
        <h1>we have {guest} guest and we have to make {guest} cup of tea.</h1>
        </>
    )
}


export default Guest;
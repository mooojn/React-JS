
function Page(props){
    if(props.isLoggedIn){
        return <h3>Welcome {props.userName}</h3>
    }
    return <h3>You need to log in first</h3>
}
export default Page;

function Page(props){
    return props.isLoggedIn ? <h3>Welcome {props.userName}</h3> : <h3>You need to log in first</h3>
}
export default Page;
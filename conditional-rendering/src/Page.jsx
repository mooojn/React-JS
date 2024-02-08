
function Page(props){
    const welcome_msg = <h3>Welcome {props.userName}</h3>;
    const log_in_msg = <h3>You need to log in first</h3>;

    return props.isLoggedIn ? welcome_msg : log_in_msg;
}
export default Page;
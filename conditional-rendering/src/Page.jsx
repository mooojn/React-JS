
function Page(props){
    const welcome_msg = <p className="welcome-msg">Welcome {props.userName}</p>;
    const log_in_msg = <p className="error-msg">You need to log in first</p>;

    return props.isLoggedIn ? welcome_msg : log_in_msg;
}

export default Page;
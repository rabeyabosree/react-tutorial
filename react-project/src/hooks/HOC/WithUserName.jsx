

function WithUserName(WrappedComponent) {
    return function EnhanceComponent(props) {
        const { isLoggedIn, user } = props

        const userName = isLoggedIn ? user : "Guest User"


        return <WrappedComponent {...props} userName={userName} />
    }

}

export default WithUserName
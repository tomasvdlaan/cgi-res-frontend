function LoginInput({label}: {label: string}) {
    return (
        <div>
            {label}
            <form className="input text-2xl"></form>
            <input type="text" className="bg-gray "/>
           
        </div>
    )
}

export default LoginInput;
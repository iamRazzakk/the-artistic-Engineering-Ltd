
import login from '../../assets/4957136.jpg'
const Login = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-center text-black'>Login now</h1>
            <div className='md:flex'>
                <div className=' md:flex-1 '>
                    <img className='border-red-600' src={login} alt="" />
                </div>
                <div className='flex-1 w-full mx-auto md:p-12'>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered bg-blue-400 text-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered bg-blue-400 text-white" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Login</button>
                        </div>
                        <div className="divider text-blue-600"></div>
                        <div className="form-control mt-1">
                            <button className="btn btn-outline bg-yellow-300 text-white">Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
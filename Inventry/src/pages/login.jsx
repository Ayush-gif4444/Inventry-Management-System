import {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/input';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState({});
    const [status, setStatus] = useState("idle");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (error[name]) setError({ ...error, [name]: '' });
    }

    function validate() {
        const next={};
        if(!formData.email.includes('@'))
             next.email="Email doesn't look valid";
        if(form.password.length<8)
             next.password="Password must be at least 8 characters";
        return next;
    }
    function handleSubmit(e) {
        e.preventDefault();
        const next=validate();
        setError(next);
        if(Object.keys(next).length>0) return;
        setStatus("submitting");
        setTimeout(()=>setStatus("blocked"), 900);
    }
    return (
        <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4 py-12">
            <div className="w-full max-w-sm">
                <p className="text-xs font-bold uppercase tracking- [0.18em] text-moss-600">
                    University Inventry Management System
                </p>
                <h1 className="mt-2 font-display text-3xl font-semibold"> Welcome</h1>
                <p className="mt-2 text-sm text-ink/55">
                    Sign in to your account
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4" novalidate>
                    <Input label="Email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} error={error.email}/>
                    <Input label="Password" name="password" type="password" placeholder="Minimum 8 characters" value={formData.password} onChange={handleChange} error={error.password}/>
                    <Button type="submit" className="w-full" size="lg" loading={status=="submitting"}>
                        {status=="submitting"?"Signing in":"Sign in"}
                    </Button>
                </form>
                {status==="blocked" && (
                    <div className="mt-5 rounded">
                        For now, skip ahead and <Link to="/dashboard" className="font-semibold hover:underline">explore the app</Link>
                    </div>
                )}

                <p className="mt-6 text-center text-sm text-ink/55">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-semibold text-moss-700 hover:unnderline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )


}
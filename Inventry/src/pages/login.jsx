import {useState} from 'react';
import {Link} from 'react-router-dom';
import AuthLayout, {AuthPrompt, EMAIL_PATTERN} from '../components/AuthLayout';
import Button from '../components/Button';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
import mailIcon from '../assets/login/mail.svg';
import arrowRightIcon from '../assets/login/arrow-right.svg';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });
    const [error, setError] = useState({});
    const [status, setStatus] = useState("idle");

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
        if (error[name]) setError({ ...error, [name]: '' });
    }

    function validate() {
        const next = {};
        if (!EMAIL_PATTERN.test(formData.email.trim()))
            next.email = "Email doesn't look valid";
        if (formData.password.length < 8)
            next.password = "Password must be at least 8 characters";
        return next;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const next = validate();
        setError(next);
        if (Object.keys(next).length > 0) return;
        setStatus("submitting");
        setTimeout(() => setStatus("blocked"), 900);
    }

    return (
        <AuthLayout
            title="Welcome Back!"
            description="Sign in to access your inventory management dashboard."
        >
            <form onSubmit={handleSubmit} className="mt-11" noValidate>
                <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your university email address"
                    icon={mailIcon}
                    value={formData.email}
                    onChange={handleChange}
                    error={error.email}
                />
                <PasswordInput
                    className="mt-6"
                    label="Password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    error={error.password}
                />

                <div className="mt-6 flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2.5 text-[13px] leading-5 text-[#647088]">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                            className="size-[17px] cursor-pointer rounded-[4px] border-[#ced5e2] accent-brand-600"
                        />
                        Remember me
                    </label>
                    <Link to="/forgot-password" className="text-[13px] leading-5 font-semibold text-brand-600 hover:underline">
                        Forgot password?
                    </Link>
                </div>

                <Button type="submit" size="lg" className="relative mt-8 w-full" loading={status === "submitting"}>
                    {status === "submitting" ? "Signing in" : "Sign in"}
                    {status !== "submitting" && (
                        <img src={arrowRightIcon} alt="" width="20" height="20" className="absolute right-5" />
                    )}
                </Button>
            </form>

            {status === "blocked" && (
                <div className="mt-5 rounded-[10px] border border-line bg-white px-4 py-3 text-sm text-muted">
                    For now, skip ahead and{' '}
                    <Link to="/dashboard" className="font-semibold text-brand-600 hover:underline">explore the app</Link>
                </div>
            )}

            <AuthPrompt className="mt-[34px]" question="Don’t have an account?" to="/signup" linkText="Request access" />
        </AuthLayout>
    );
}

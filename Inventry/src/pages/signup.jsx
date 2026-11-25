import {useState} from 'react';
import {Link} from 'react-router-dom';
import AuthLayout, {AuthPrompt, EMAIL_PATTERN} from '../components/AuthLayout';
import Button from '../components/Button';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
import mailIcon from '../assets/login/mail.svg';
import arrowRightIcon from '../assets/login/arrow-right.svg';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
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
        if (!formData.name.trim())
            next.name = "Please enter your full name";
        if (!EMAIL_PATTERN.test(formData.email.trim()))
            next.email = "Email doesn't look valid";
        if (formData.password.length < 8)
            next.password = "Password must be at least 8 characters";
        if (!formData.confirmPassword)
            next.confirmPassword = "Please confirm your password";
        else if (formData.confirmPassword !== formData.password)
            next.confirmPassword = "Passwords don't match";
        if (!formData.terms)
            next.terms = "You must agree to the Terms of Service and Privacy Policy";
        return next;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const next = validate();
        setError(next);
        if (Object.keys(next).length > 0) {
            setStatus("idle");
            return;
        }
        setStatus("submitting");
        setTimeout(() => setStatus("done"), 900);
    }

    return (
        <AuthLayout
            pageTitle="Sign up"
            compact
            title="Create your account"
            description="Join UniStock to manage your university’s resources."
        >
            <form onSubmit={handleSubmit} className="mt-[22px]" noValidate>
                <Input
                    size="sm"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    error={error.name}
                />
                <Input
                    size="sm"
                    className="mt-2.5"
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
                    size="sm"
                    className="mt-2.5"
                    label="Password"
                    name="password"
                    autoComplete="new-password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    error={error.password}
                />
                <PasswordInput
                    size="sm"
                    className="mt-2.5"
                    label="Confirm Password"
                    name="confirmPassword"
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={error.confirmPassword}
                />

                <div className="mt-6">
                    <label className="flex cursor-pointer items-center gap-2.5 text-xs leading-5 text-[#647088]">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            aria-invalid={!!error.terms}
                            className="size-[17px] shrink-0 cursor-pointer rounded-[4px] border-[#ced5e2] accent-brand-600"
                        />
                        <span>
                            I agree to the <span className="text-[#4b53c5]">Terms of Service</span> and{' '}
                            <span className="text-[#4b53c5]">Privacy Policy</span>.
                        </span>
                    </label>
                    {error.terms && <p className="mt-1.5 text-[13px] text-clay">{error.terms}</p>}
                </div>

                <Button type="submit" size="lg" className="relative mt-11 w-full" loading={status === "submitting"}>
                    {status === "submitting" ? "Creating account" : "Create account"}
                    {status !== "submitting" && (
                        <img src={arrowRightIcon} alt="" width="20" height="20" className="absolute right-5" />
                    )}
                </Button>
            </form>

            {status === "done" && (
                <div role="status" className="mt-5 rounded-[10px] border border-line bg-white px-4 py-3 text-sm text-muted">
                    Account request received. You can now{' '}
                    <Link to="/login" className="font-semibold text-brand-600 hover:underline">sign in</Link>.
                </div>
            )}

            <AuthPrompt className="mt-[31px]" question="Already have an account?" to="/login" linkText="Sign in" />
        </AuthLayout>
    );
}

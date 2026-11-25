import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import brandingBg from '../assets/login/branding-bg.jpg';
import orbit1 from '../assets/login/orbit-1.svg';
import orbit2 from '../assets/login/orbit-2.svg';
import orbit3 from '../assets/login/orbit-3.svg';
import graduationCap from '../assets/login/graduation-cap.svg';
import assetManagementIcon from '../assets/login/asset-management.svg';
import inventoryTrackingIcon from '../assets/login/inventory-tracking.svg';
import resourceAllocationIcon from '../assets/login/resource-allocation.svg';
import shieldIcon from '../assets/login/shield.svg';

const SUPPORT_EMAIL = 'support@unistock.edu';

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const features = [
    {icon: assetManagementIcon, label: 'Centralized Asset Management'},
    {icon: inventoryTrackingIcon, label: 'Real-Time Inventory Tracking'},
    {icon: resourceAllocationIcon, label: 'Efficient Resource Allocation'},
];

const orbits = [
    {src: orbit1, size: 520},
    {src: orbit2, size: 406},
    {src: orbit3, size: 292},
];

function BrandingPanel() {
    return (
        <aside className="relative hidden w-[45%] shrink-0 overflow-hidden lg:flex lg:flex-col bg-[linear-gradient(122deg,var(--color-navy-900)_10%,var(--color-navy-700)_79%)] px-16 pt-[60px] pb-[71px] text-white">
            <img src={brandingBg} alt="" className="pointer-events-none absolute inset-0 size-full object-cover opacity-30" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900/50 to-[rgba(38,38,102,0.05)]" />
            <div className="pointer-events-none absolute right-[33px] bottom-[49px]">
                {orbits.map(({src, size}) => (
                    <img key={size} src={src} alt="" width={size} height={size}
                        className="absolute max-w-none -translate-x-1/2 -translate-y-1/2" />
                ))}
            </div>

            <div className="relative flex flex-1 flex-col">
                <div className="flex items-center gap-3.5">
                    <div className="flex size-[52px] items-center justify-center rounded-[15px] border border-white/13 bg-white/9">
                        <img src={graduationCap} alt="" width="30" height="30" />
                    </div>
                    <div>
                        <p className="text-[28px] leading-[34px] font-semibold">UniStock</p>
                        <p className="mt-[3px] text-xs text-[#bcc5e4]">University Inventory Management System</p>
                    </div>
                </div>

                <div className="mt-[82px] h-[3px] w-10 rounded-full bg-brand-300" />
                <h2 className="mt-8 max-w-[535px] text-[42px] leading-[53px] font-semibold">
                    Smart Inventory<br />Management for<br />Modern Universities.
                </h2>
                <p className="mt-[29px] max-w-[466px] text-base leading-[27px] text-[#bdc8e4]">
                    A centralized platform to manage university assets, equipment, furniture, and resources efficiently.
                </p>

                <ul className="mt-[81px] space-y-6">
                    {features.map(({icon, label}) => (
                        <li key={label} className="flex items-center gap-4">
                            <span className="flex size-[42px] items-center justify-center rounded-xl bg-white/6">
                                <img src={icon} alt="" width="22" height="22" />
                            </span>
                            <span className="text-[15px] leading-[22px] font-medium text-[#edf0ff]">{label}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto max-w-[520px] border-t border-white/12 pt-[26px]">
                    <p className="text-[10px] leading-4 font-medium tracking-[1.4px] text-[#a6b3d4]">
                        PURPOSE-BUILT FOR HIGHER EDUCATION
                    </p>
                </div>
            </div>
        </aside>
    );
}

export default function AuthLayout({pageTitle, title, description, compact = false, children}) {
    useEffect(() => {
        document.title = `UniStock · ${pageTitle}`;
    }, [pageTitle]);

    return (
        <div className="flex min-h-screen bg-brand-50 font-sans text-ink">
            <BrandingPanel />

            <main className="flex flex-1 flex-col px-6 pt-[68px] pb-[31px] sm:px-[57px]">
                <p className="text-right text-[13px] leading-5 text-[#7a8497] sm:pr-8">
                    Need assistance?{' '}
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-brand-700 hover:underline">
                        Contact support
                    </a>
                </p>

                <div className="flex flex-1 flex-col items-center justify-center pt-12 pb-12 lg:pb-0">
                    <div className="w-full max-w-[440px]">
                        <p className="text-[10px] leading-4 font-semibold tracking-[1.5px] text-brand-500">
                            YOUR CAMPUS. CONNECTED.
                        </p>
                        <h1 className={`${compact ? "mt-[14px]" : "mt-[19px]"} text-[34px] leading-[44px] font-semibold`}>{title}</h1>
                        <p className="mt-3 text-[15px] leading-6 text-muted">{description}</p>

                        {children}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-[26px] text-[11px] leading-[18px]">
                    <p className="flex items-center gap-[7px] text-[#8791a5]">
                        <img src={shieldIcon} alt="" width="16" height="16" />
                        Secure access for authorized university staff
                    </p>
                    <p className="text-[#98a1b3]">© 2026 UniStock. All rights reserved.</p>
                </div>
            </main>
        </div>
    );
}

export function AuthPrompt({question, to, linkText, className = ""}) {
    return (
        <p className={`text-center text-[13px] leading-5 text-[#7a8497] ${className}`}>
            {question}{' '}
            <Link to={to} className="ml-1 font-semibold text-brand-600 hover:underline">
                {linkText}
            </Link>
        </p>
    );
}

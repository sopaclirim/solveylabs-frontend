// Footer.tsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Footer() {
    const { t } = useTranslation("common");
    const year = new Date().getFullYear();

    const socials = [
        { href: "https://instagram.com/solveylabs", label: "Instagram", icon: "logos:instagram-icon" },
        { href: "https://facebook.com/solveylabs", label: "Facebook", icon: "logos:facebook" },
        { href: "https://linkedin.com/company/solveylabs", label: "LinkedIn", icon: "logos:linkedin-icon" },
        { href: "https://github.com/solveylabs", label: "GitHub", icon: "logos:github-icon" },
    ];

    const payments = [
        { label: "Visa", icon: "logos:visa" },
        { label: "Mastercard", icon: "logos:mastercard" },

        { label: "PayPal", icon: "logos:paypal" },
        { label: "Stripe", icon: "logos:stripe" },
        { label: "Apple Pay", icon: "logos:apple-pay" },
    ];

    return (
        <footer className="pt-20 md:pt-26 border-t border-lightest-navy/10 bg-dark-navy/50">
            <div className="py-12 md:py-16 px-10 lg:px-16 xl:px-36">
                {/* grid 4 kolona në desktop, 1 në mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-lightest-slate">
                    {/* About / Address */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-lightest-slate">{t("brand")}</h3>
                        <p className="text-slate mb-6 leading-relaxed">{t("footer.tagline")}</p>

                        <address className="not-italic text-sm leading-6 text-light-slate">
                            <div className="font-medium text-lightest-slate">{t("footer.office")}</div>
                            <div>{t("footer.address")}</div>
                            <div>{t("footer.country")}</div>
                            <div className="mt-2">
                                <a className="hover:underline" href="mailto:hello@solveylabs.com">hello@solveylabs.com</a>{" · "}
                                <a className="hover:underline" href="tel:+38344123456">+383 44 123 456</a>
                            </div>
                        </address>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-lightest-slate">{t("footer.services")}</h3>
                        <ul className="space-y-3 text-slate">
                            <li><Link to="/#sherbimet" className="hover:text-accent">{t("footer.s_custom")}</Link></li>
                            <li><Link to="/#sherbimet" className="hover:text-accent">{t("footer.s_web")}</Link></li>
                            <li><Link to="/#sherbimet" className="hover:text-accent">{t("footer.s_mobile")}</Link></li>
                            <li><Link to="/#sherbimet" className="hover:text-accent">{t("footer.s_cloud")}</Link></li>
                        </ul>
                    </div>

                    {/* Links & Social */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-lightest-slate">{t("footer.links")}</h3>
                        <ul className="space-y-3 text-slate mb-6">
                            <li><Link to="/blog" className="hover:text-accent">{t("nav.blog")}</Link></li>
                            <li><Link to="/careers" className="hover:text-accent">{t("nav.careers")}</Link></li>
                            <li><Link to="/contact" className="hover:text-accent">{t("nav.contact")}</Link></li>
                            <li><a href="/legal/privacy" className="hover:text-accent">{t("footer.privacy")}</a></li>
                            <li><a href="/legal/terms" className="hover:text-accent">{t("footer.terms")}</a></li>
                        </ul>

                        <div className="flex items-center gap-3">
                            {socials.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    title={s.label}
                                    className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white hover:bg-white/95 transition"
                                >
                                    <Icon icon={s.icon} width={20} height={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Payments & Location */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-lightest-slate">{t("footer.payments")}</h3>
                        <p className="text-slate text-sm mb-4">{t("footer.weAccept")}</p>
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            {payments.map(p => (
                                <span
                                    key={p.label}
                                    title={p.label}
                                    aria-label={p.label}
                                    className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-white/10 bg-white px-2"
                                >
                                    <Icon icon={p.icon} width={24} height={24} />
                                </span>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-lightest-slate">{t("footer.findUs")}</h3>
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-accent/30 transition-colors">
                            <div className="overflow-hidden rounded-xl">
                                <div className="aspect-video">
                                    <iframe
                                        title={t("footer.officeMap")}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="h-full w-full"
                                        src="https://www.google.com/maps?q=42.521924,21.119644&z=16&output=embed"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <hr className="border-lightest-navy/10 mt-12 md:mt-16" />

                {/* Bottom bar */}
                <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-slate text-sm md:text-base">
                    <p>&copy; {year} {t("brand")}. {t("footer.rights")}</p>
                    <p className="opacity-80">{t("footer.madeIn")}</p>
                </div>
            </div>
        </footer>
    );
}
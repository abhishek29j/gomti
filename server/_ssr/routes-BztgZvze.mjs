import { o as __toESM } from "../_runtime.mjs";
import { t as PHONE } from "./routes-CIh6a0GN.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as ArrowRight, S as Building2, _ as GraduationCap, a as Sparkles, b as CircleCheck, c as School, d as Phone, f as MessageCircle, g as Hospital, h as House, i as Star, l as Route, m as IndianRupee, n as TreePine, o as ShoppingBag, p as MapPin, r as TramFront, s as Shield, t as TrendingUp, u as Plane, v as Droplet, x as ChevronDown, y as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BztgZvze.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_aerial_default = "/assets/hero-aerial-D_znHaXd.jpg";
var logo_default = "/assets/logo-DAZcdlZc.png";
var g_roads_default = "/assets/g-plot-BZ-Rtaat.jpg";
var g_plot_default = "/assets/g-plot-BZ-Rtaat.jpg";
var plots_graphics_default = "/assets/plots%20graphics-CbGzGgIc.png";
var WHATSAPP = "918604940110";
var WA_MSG = encodeURIComponent("Hi, I'm interested in the Gomti Nagar Extension plots. Please share details.");
function LandingPage() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 40);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden bg-background font-sans text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { scrolled }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyInvest, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlights, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Investment, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {
				openFaq,
				setOpenFaq
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyMobile, {})
		]
	});
}
function Nav({ scrolled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-card py-2.5" : "bg-transparent py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "flex items-center gap-2 font-display font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid h-[3.5rem] w-[3.5rem] place-items-center rounded-xl bg-white shadow-elegant p-1`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Gomti Homes",
							className: "h-[2.1rem] w-[2.1rem] object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-[1.6875rem] ${scrolled ? "text-foreground" : "text-white"}`,
						children: "Gomti Homes"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: [
						["Why Invest", "#why"],
						["Location", "#location"],
						["Master Plan", "#layout"],
						["Pricing", "#pricing"],
						["Gallery", "#gallery"],
						["Contact", "#contact"]
					].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: `text-sm font-medium transition-colors ${scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"}`,
						children: l
					}, h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE}`,
					className: "hidden items-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground shadow-cta-glow transition hover:scale-105 sm:inline-flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call Now"]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_aerial_default,
				alt: "Aerial view of residential plots in Gomti Nagar Extension near Amity University",
				className: "absolute inset-0 h-full w-full object-cover",
				width: 1920,
				height: 1200
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-hero)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-32 pb-36 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-gold" }), " Now Booking · Phase II"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl lg:text-7xl",
							children: [
								"Own Your Dream Plot in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "Gomti Nagar Ext"
								}),
								", Lucknow"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-base text-white/85 sm:text-lg md:text-xl",
							children: "Premium Residential Plots Near Amity University · Excellent Connectivity · High Appreciation Potential."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 flex flex-wrap gap-2",
							children: [
								"Registry Available",
								"Ready for Construction",
								"Bank Loan Assistance"
							].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-gradient-to-r from-emerald-600/90 via-teal-600/90 to-cyan-600/90 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-gold" }),
									" ",
									b
								]
							}, b))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "group inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 font-semibold text-cta-foreground shadow-cta-glow transition hover:scale-105",
									children: ["Schedule Site Visit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${PHONE}`,
									className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary shadow-elegant transition hover:scale-105",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call Now"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${WHATSAPP}?text=${WA_MSG}`,
									target: "_blank",
									rel: "noopener",
									className: "inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white shadow-elegant transition hover:scale-105",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-4 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 pb-6 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 rounded-2xl border border-white/20 bg-gradient-to-r from-emerald-600/90 via-teal-600/90 to-cyan-600/90 p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md md:grid-cols-4",
						children: [
							["Starting From", "₹29 Lakhs"],
							["Plot Sizes", "1250 sq.ft."],
							["Location", "Prime · Gomti Nagar Ext."],
							["Inventory", "Limited · Phase II"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-wider text-white/70",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-lg font-bold text-white sm:text-xl",
								children: v
							})]
						}, k))
					})
				})
			})
		]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border/60 bg-gradient-soft py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center sm:px-6 md:grid-cols-4",
			children: [
				["50+", "Happy Families"],
				["12+", "Years of Trust"],
				["100%", "Approvals"],
				["4.9★", "Buyer Rating"]
			].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-3xl font-extrabold text-primary sm:text-4xl",
				children: n
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-sm text-muted-foreground",
				children: l
			})] }, l))
		})
	});
}
function WhyInvest() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "why",
		eyebrow: "Why Invest",
		title: "Ten reasons this is the smartest plot buy in Lucknow",
		desc: "Growth drivers you can see today, and appreciation you'll feel tomorrow.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
			children: [
				[
					GraduationCap,
					"Near Amity University",
					"1.4 kilometer from Amity University campus."
				],
				[
					TrendingUp,
					"Rapidly Developing Area",
					"Infrastructure growth driving prices."
				],
				[
					Route,
					"Wide 30 ft Roads",
					"Well planned internal road grid."
				],
				[
					TreePine,
					"Green Environment",
					"Landscaped parks & tree-lined avenues."
				],
				[
					TramFront,
					"Excellent Connectivity",
					"Metro, expressway & airport nearby."
				],
				[
					IndianRupee,
					"High ROI Potential",
					"Projected 2× appreciation in 5 yrs."
				],
				[
					Building2,
					"Future Metro Line",
					"Upcoming metro just 2 km away."
				],
				[
					Droplet,
					"24×7 Water & Power",
					"Underground utilities in place."
				],
				[
					Shield,
					"Good Community",
					"Become part of a vibrant community that offers safety and convenience"
				],
				[
					House,
					"Peaceful Residential",
					"Low-density, family-friendly zone."
				]
			].map(([Icon, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group hover-lift rounded-2xl bg-card p-5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-elegant",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-base font-semibold text-foreground",
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: d
					})
				]
			}, t))
		})
	});
}
function Location() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "location",
		eyebrow: "Location",
		title: "A prime address at the centre of new Lucknow",
		desc: "Everything that matters — education, healthcare, retail, transit — within a short drive.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl shadow-elegant lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Project location",
					src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28479.192139622213!2d81.0353916347656!3d26.843163999999977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1784982054269!5m2!1sen!2sin",
					className: "h-[420px] w-full border-0 lg:h-full",
					loading: "lazy",
					allowFullScreen: true,
					referrerPolicy: "strict-origin-when-cross-origin"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:col-span-2",
				children: [
					[
						GraduationCap,
						"Amity University",
						"5 min"
					],
					[
						ShoppingBag,
						"Lulu Mall",
						"15 min"
					],
					[
						Route,
						"Shaheed Path",
						"8 min"
					],
					[
						Route,
						"Sultanpur Road",
						"6 min"
					],
					[
						MapPin,
						"Gomti Nagar Ext.",
						"In-locality"
					],
					[
						Plane,
						"CCS Airport",
						"35 min"
					],
					[
						TramFront,
						"Charbagh Station",
						"30 min"
					],
					[
						Hospital,
						"Medanta Hospital",
						"12 min"
					],
					[
						School,
						"CMS / DPS Schools",
						"10 min"
					],
					[
						ShoppingBag,
						"Phoenix Palassio",
						"18 min"
					]
				].map(([Icon, name, time]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hover-lift flex items-center gap-3 rounded-2xl bg-card p-4 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-medium text-foreground",
								children: name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Distance"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 inline h-3 w-3" }), time]
						})
					]
				}, name))
			})]
		})
	});
}
function Highlights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "highlights",
		eyebrow: "Project Highlights",
		title: "Built for the way modern families want to live",
		desc: "Every detail engineered around comfort, community and long-term value.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",
			children: [
				["🏡", "Residential Plots"],
				["🛣️", "Wide Roads"],
				["🌳", "Green Environment"],
				["💧", "24×7 Water"],
				["⚡", "Electricity"],
				["🏫", "Educational Hub"],
				["🏥", "Hospitals Nearby"],
				["🛒", "Markets Nearby"],
				["🚗", "Great Connectivity"],
				["📈", "Investment Grade"]
			].map(([e, t]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hover-lift group rounded-2xl bg-gradient-soft p-5 text-center shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-3xl transition group-hover:scale-110",
					children: e
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-sm font-semibold text-foreground",
					children: t
				})]
			}, t))
		})
	});
}
function Layout() {
	Array.from({ length: 30 }, (_, i) => {
		const mod = i % 5;
		const status = mod === 0 ? "sold" : mod === 1 ? "booked" : "available";
		return {
			id: i + 1,
			status
		};
	});
	const [selected, setSelected] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "layout",
		eyebrow: "Master Plan",
		title: "Choose your plot on the interactive layout",
		desc: "Hurry Up! only few left",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-3xl bg-card p-6 shadow-elegant",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: plots_graphics_default,
					alt: "Master plan layout",
					className: "w-full rounded-lg object-cover"
				})
			}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-accent px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold text-primary",
						children: ["Plot #", selected]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-muted-foreground",
						children: "is available · Enquire for size & price."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "inline-flex items-center gap-2 rounded-full bg-gradient-cta px-4 py-2 text-sm font-semibold text-cta-foreground shadow-cta-glow",
					children: ["Reserve Plot ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})]
		})
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "pricing",
		eyebrow: "Plot Sizes & Pricing",
		title: "Transparent pricing across every plot size",
		desc: "All-inclusive indicative pricing. Final rate depends on plot position, corner premium & payment plan.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-2",
			children: [{
				label: "Plot 1",
				size: "1250",
				price: "29.00"
			}, {
				label: "Plot 2",
				size: "1250",
				price: "29.00"
			}].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hover-lift relative rounded-3xl p-6 bg-card shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-muted-foreground/10 px-3 py-1 text-[11px] font-bold uppercase text-muted-foreground shadow-sm",
						children: p.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Plot Size"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 font-display text-3xl font-extrabold",
						children: [
							p.size,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-medium opacity-80",
								children: "sq.ft."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-xs text-muted-foreground",
						children: "Starting Price"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-3xl font-extrabold",
						children: [
							"₹",
							p.price,
							" L",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium opacity-80",
								children: "*"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-4 py-2.5 text-sm font-semibold text-cta-foreground shadow-cta-glow transition hover:scale-[1.02]",
						children: ["Book Site Visit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}, p.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-5 text-center text-xs text-muted-foreground",
			children: "*Prices are indicative and subject to change. Limited inventory — book early to lock current rates."
		})]
	});
}
function Investment() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "investment",
		eyebrow: "Investment Timeline",
		title: "Get in before the next growth wave",
		desc: "Every milestone below is a documented catalyst for property appreciation in the corridor.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-gold to-cta md:left-1/2 md:-translate-x-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: [
					[
						"2024",
						"Growing Infrastructure",
						"Sultanpur Road & Shaheed Path expansion complete."
					],
					[
						"2025",
						"Amity University Campus",
						"New campus operational — student & staff demand surges."
					],
					[
						"2026",
						"Road & Metro Expansion",
						"Proposed metro corridor extension nears completion."
					],
					[
						"2027",
						"Commercial Growth",
						"Retail hubs & office parks push property demand higher."
					],
					[
						"2028+",
						"Peak Appreciation",
						"Projected 2×–2.5× value on today's rates."
					]
				].map(([y, t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex flex-col gap-4 md:flex-row md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden w-1/2 md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-4 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-primary text-xs font-bold text-white shadow-elegant md:left-1/2",
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-12 w-full rounded-2xl bg-card p-5 shadow-card md:ml-0 md:w-1/2 md:px-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-bold uppercase tracking-wider text-cta",
									children: y
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-display text-lg font-semibold text-foreground",
									children: t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-muted-foreground",
									children: d
								})
							]
						})
					]
				}, t))
			})]
		})
	});
}
function Gallery() {
	const imgs = [
		[
			hero_aerial_default,
			"Aerial view",
			"row-span-2 col-span-2"
		],
		[
			g_roads_default,
			"2 plots",
			""
		],
		[
			g_plot_default,
			"Ready plots",
			"col-span-2"
		]
	];
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "gallery",
		eyebrow: "Gallery",
		title: "See the project through the lens",
		desc: "Real photos from site — updated regularly.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4",
			children: imgs.map(([src, alt, cls]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setLightbox(src),
				className: `group relative overflow-hidden rounded-2xl shadow-card ${cls}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt,
						loading: "lazy",
						className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-3 left-3 translate-y-2 text-sm font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100",
						children: alt
					})
				]
			}, alt))
		}), lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm",
			onClick: () => setLightbox(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: lightbox,
				alt: "",
				className: "max-h-[92vh] max-w-[95vw] rounded-2xl shadow-elegant"
			})
		})]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "testimonials",
		eyebrow: "Testimonials",
		title: "Trusted by families and investors",
		desc: "Real stories from real buyers.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					n: "Rakesh Sharma",
					r: "Investor · Delhi",
					t: "Bought two plots in Phase I — value has appreciated 45% in 18 months. Genuine team, clean paperwork."
				},
				{
					n: "Ananya Verma",
					r: "IT Professional · Lucknow",
					t: "Wanted a home near Amity for my daughter. Location & connectivity are unbeatable. Highly recommended."
				},
				{
					n: "Dr. Imran Khan",
					r: "NRI Buyer · Dubai",
					t: "Handled every step remotely — from documentation to registry. Zero hassle, complete transparency."
				},
				{
					n: "Priya Mehta",
					r: "First-time Buyer",
					t: "Loan assistance made it so smooth. I couldn't have asked for a better first investment."
				}
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hover-lift flex h-full flex-col rounded-2xl bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-0.5 text-gold",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex-1 text-sm leading-relaxed text-foreground/80",
						children: [
							"\"",
							t.t,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-3 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-bold text-white",
							children: t.n[0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-foreground",
							children: t.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: t.r
						})] })]
					})
				]
			}, t.n))
		})
	});
}
function Faq({ openFaq, setOpenFaq }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "faq",
		eyebrow: "FAQs",
		title: "Everything you wanted to ask",
		desc: "Quick answers to the most common buyer questions.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl space-y-3",
			children: [
				["Is Registry Available?", "Yes. Registry is available on every plot immediately upon full payment, at the sub-registrar office."],
				["Is a Home Loan Available?", "Yes. We're empanelled with SBI, HDFC, ICICI, LIC HFL and Bank of Baroda. Our team assists you end-to-end."],
				["Is the project approved?", "Yes. The layout has all necessary approvals and NOCs available for inspection at our site office."],
				["When is the possession?", "Immediate. Plots are physically demarcated, boundary-walled and ready for construction."],
				["What payment plans do you offer?", "Down-payment, 3/6/12 month instalment and construction-linked plans. Custom plans available on request."],
				["Are there construction rules?", "Yes. Standard LDA norms apply: setback, FAR, and height as per zoning. Full guidelines shared at booking."]
			].map(([q, a], i) => {
				const open = openFaq === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl bg-card shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
						onClick: () => setOpenFaq(open ? null : i),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold text-foreground",
							children: q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-5 pb-5 text-sm text-muted-foreground",
								children: a
							})
						})
					})]
				}, q);
			})
		})
	});
}
function LeadForm() {
	const [modal, setModal] = (0, import_react.useState)(null);
	const onSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const payload = {
			name: data.get("name")?.toString().trim() || "",
			phone: data.get("phone")?.toString().trim() || "",
			email: data.get("email")?.toString().trim() || "",
			date: data.get("date")?.toString().trim() || "",
			message: data.get("message")?.toString().trim() || ""
		};
		try {
			const response = await fetch("/api/submit-lead", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify(payload),
				credentials: "same-origin"
			});
			const responseText = await response.text();
			let result = { success: false };
			try {
				result = JSON.parse(responseText);
			} catch {
				result = {
					success: response.ok,
					message: responseText || ""
				};
			}
			if (!response.ok || result.success !== true) throw new Error(result.error || result.message || "Unable to send your request.");
			setModal({
				title: "Request received",
				message: result.message || "Thanks! Our team will contact you shortly.",
				type: "success"
			});
			form.reset();
		} catch (error) {
			console.error(error);
			setModal({
				title: "Submission failed",
				message: "We couldn't send your request right now. Please call us directly at +918604940110.",
				type: "error"
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden py-20 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-10",
				style: {
					backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)",
					backgroundSize: "40px 40px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-gold" }), " Limited Inventory"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl",
								children: "Reserve Your Plot Before Prices Rise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-lg text-white/85",
								children: "Prices expected to increase in the next phase. Book a site visit today — free pickup & drop from Lucknow within 15 km."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${PHONE}`,
									className: "flex items-center gap-3 rounded-2xl glass-dark p-4 text-white transition hover:scale-[1.02]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-cta shadow-cta-glow",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-wider text-white/70",
										children: "Call"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: "+918604940110"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${WHATSAPP}?text=${WA_MSG}`,
									target: "_blank",
									rel: "noopener",
									className: "flex items-center gap-3 rounded-2xl glass-dark p-4 text-white transition hover:scale-[1.02]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-whatsapp",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-wider text-white/70",
										children: "WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: "Instant Reply"
									})] })]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						action: "/api/submit-lead",
						method: "post",
						className: "rounded-3xl bg-card p-6 shadow-elegant sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold text-foreground",
								children: "Book Your Site Visit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Fill the form — our senior consultant will call you within 15 minutes."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full Name",
										name: "name",
										type: "text",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone",
										name: "phone",
										type: "tel",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										name: "email",
										type: "email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Preferred Visit Date",
										name: "date",
										type: "date"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Message",
									name: "message",
									as: "textarea"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-3 font-semibold text-cta-foreground shadow-cta-glow transition hover:scale-[1.02] sm:flex-none",
									children: ["Book Site Visit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${WHATSAPP}?text=${WA_MSG}`,
									target: "_blank",
									rel: "noopener",
									className: "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white transition hover:scale-[1.02]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[11px] text-muted-foreground",
								children: "By submitting, you agree to be contacted about this project. We respect your privacy."
							})
						]
					}),
					modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold uppercase tracking-[0.18em] text-primary",
										children: modal.type === "success" ? "Success" : "Error"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-2xl font-bold text-foreground",
										children: modal.title
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setModal(null),
										className: "text-foreground/70 transition hover:text-foreground",
										children: "×"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-5 text-sm ${modal.type === "success" ? "text-foreground/80" : "text-red-700"}`,
									children: modal.message
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 flex justify-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setModal(null),
										className: "rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90",
										children: "Close"
									})
								})
							]
						})
					})
				]
			})
		]
	});
}
function Field({ label, name, type = "text", required, as, options }) {
	const base = "mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
		children: [
			label,
			required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-cta",
				children: " *"
			}),
			as === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				name,
				required,
				className: base,
				defaultValue: "",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					disabled: true,
					children: "Select…"
				}), options?.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))]
			}) : as === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				name,
				rows: 3,
				className: base,
				placeholder: "Anything specific you're looking for?"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name,
				type,
				required,
				className: base
			})
		]
	});
}
function Trust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "trust",
		eyebrow: "Why Trust Us",
		title: "Backed by trust, delivered with transparency",
		desc: "Every promise we make is backed by paperwork and proof.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				"Approvals",
				"Transparent Documentation",
				"Registry Support",
				"Bank Loan Assistance",
				"Professional Sales Team",
				"Secure Investment"
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hover-lift flex items-center gap-3 rounded-2xl bg-card p-5 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground",
					children: t
				})]
			}, t))
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/60 bg-primary text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-[3.5rem] w-[3.5rem] place-items-center rounded-xl bg-white p-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Gomti Homes",
								className: "h-[2.1rem] w-[2.1rem] object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[1.6875rem] font-bold",
							children: "Gomti Homes"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm text-white/75",
						children: "Premium residential plots in Gomti Nagar Extension, Lucknow — near Amity University campus."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-sm font-bold uppercase tracking-wider text-gold",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-white/85",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0" }), " +918604940110"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 shrink-0" }), " WhatsApp 24×7"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0" }), " Gomti Nagar Ext., Lucknow, UP"]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-sm font-bold uppercase tracking-wider text-gold",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-white/85",
					children: [
						["Why Invest", "#why"],
						["Master Plan", "#layout"],
						["Pricing", "#pricing"],
						["Gallery", "#gallery"],
						["FAQs", "#faq"]
					].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "hover:text-gold",
						children: l
					}) }, h))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/70 sm:flex-row sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Gomti Homes. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Disclaimer"
						})
					]
				})]
			})
		})]
	});
}
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `https://wa.me/${WHATSAPP}?text=${WA_MSG}`,
		target: "_blank",
		rel: "noopener",
		className: "animate-float fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-elegant transition hover:scale-110 md:bottom-6",
		"aria-label": "Chat on WhatsApp",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
	});
}
function StickyMobile() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-1 border-t border-border bg-card p-2 shadow-elegant md:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `tel:${PHONE}`,
				className: "flex flex-col items-center rounded-xl bg-primary py-2 text-xs font-semibold text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `https://wa.me/${WHATSAPP}?text=${WA_MSG}`,
				target: "_blank",
				rel: "noopener",
				className: "flex flex-col items-center rounded-xl bg-whatsapp py-2 text-xs font-semibold text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				className: "flex flex-col items-center rounded-xl bg-gradient-cta py-2 text-xs font-semibold text-cta-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Site Visit"]
			})
		]
	});
}
function Section({ id, eyebrow, title, desc, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-12 max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl",
						children: title
					}),
					desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base text-muted-foreground",
						children: desc
					})
				]
			}), children]
		})
	});
}
//#endregion
export { LandingPage as component };

// ─────────────────────────────────────────────────────────────────────────────
// Site configuration: the ONE file the founder (or Claude) edits to go live.
//
// Anything set to `null` or containing "TODO" is still a placeholder. The page
// is built so that missing values degrade safely:
//   • A plan with no `paymentLink` shows a disabled "Opening soon" button.
//   • Analytics/pixel tags are only injected when their ID is set.
//   • The waitlist form falls back to an email link if storage isn't set up.
// ─────────────────────────────────────────────────────────────────────────────

export const BUSINESS = {
	name: "City Wood", // TODO(founder): confirm business name
	domain: "example.com", // TODO(founder): confirm domain, e.g. citywood.co
	tagline: "Firewood delivered to your Hoboken apartment.",
	email: "hello@example.com", // TODO(founder): contact email
	phone: null as string | null, // TODO(founder): optional, e.g. "(201) 555-0100"
	serviceArea: "Hoboken, NJ (07030)",
};

// Launch / founding-member note (brief §7.7). If deliveries start on a future
// date, set `firstDelivery` (human-readable) and it will be shown prominently.
export const LAUNCH = {
	firstDelivery: null as string | null, // TODO(founder): e.g. "Saturday, Nov 21"
	refundPolicy:
		"If we can't start your deliveries by the date above, we'll refund you in full. Cancel anytime before your next billing date and you won't be charged again.", // TODO(founder): approve wording
};

// ─── Plans ───────────────────────────────────────────────────────────────────
// DRAFT PROPOSAL (not yet approved by founder; see docs/decisions.md).
// "Bundle" = a standard ~0.75 cu ft firewood bundle, the same size sold at
// grocery stores, so customers can compare directly.
// paymentLink: Stripe Payment Link URL, for later. Buttons are placeholders for now.
export type Plan = {
	id: string;
	name: string;
	price: number; // USD per month
	bundlesPerMonth: number;
	cadence: string;
	bestFor: string;
	featured?: boolean;
	paymentLink: string | null;
};

export const PLANS: Plan[] = [
	{
		id: "starter",
		name: "Starter",
		price: 49,
		bundlesPerMonth: 4,
		cadence: "2 bundles every other week",
		bestFor: "A fire or two on weekends",
		paymentLink: null,
	},
	{
		id: "regular",
		name: "Regular",
		price: 85,
		bundlesPerMonth: 8,
		cadence: "2 bundles every week",
		bestFor: "A few fires a week",
		featured: true,
		paymentLink: null,
	},
	{
		id: "fireside",
		name: "Fireside",
		price: 119,
		bundlesPerMonth: 12,
		cadence: "3 bundles every week",
		bestFor: "A fire most nights",
		paymentLink: null,
	},
];

// What-you-get details (brief §5, §7.4). TODO(founder): confirm against supplier.
export const OFFER = {
	wood: "Seasoned hardwood (oak, ash, maple mix), split and ready to burn",
	bundleSize: "About 0.75 cu ft per bundle, the same size as a grocery-store bundle",
	delivery:
		"Brought to your apartment door, or stacked where you tell us (a rack, a closet, by the hearth)",
	deliveryWindow: "Weekend delivery, with a text when we're on the way", // TODO(founder): confirm day/window
	addOns: "Kindling and fire starters coming soon", // TODO(founder)
};

// ─── Analytics & tracking (brief §6) ─────────────────────────────────────────
// Leave null until the account exists; tags are only rendered when set.
export const TRACKING = {
	cloudflareBeaconToken: null as string | null, // Cloudflare Web Analytics token
	plausibleDomain: null as string | null, // e.g. "citywood.co" if using Plausible
	metaPixelId: null as string | null, // e.g. "1234567890"
	googleTagId: null as string | null, // e.g. "AW-123456789" or "G-XXXXXXX"
	googleAdsSubscribeLabel: null as string | null, // conversion label for "subscribe click"
};

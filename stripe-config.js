// Stripe configuration
// Replace with your Stripe publishable key
// Get it from: Stripe Dashboard > Developers > API keys

const STRIPE_PUBLISHABLE_KEY = "pk_test_51T3R8e3P16MaTyvisApbihcETLnXNfmpjg3bxa0jKQwqiX1jUnlvxZxRJ7KGg1xRVOm3UjtPca9tkV4xvtT6fs0x00s2Ex8ntr";

// Product mapping: product-id (from data-product-id) → Stripe Price ID
// Example: "product-1" → "price_1234567890"
const PRODUCT_TO_PRICE_ID = {
  "product-1": "price_1T3RDO3P16MaTyvi1NaOwRCf",
  "product-2": "YOUR_PRICE_ID_2",
  "product-3": "YOUR_PRICE_ID_3",
  "product-4": "YOUR_PRICE_ID_4",
  "product-5": "YOUR_PRICE_ID_5"
};

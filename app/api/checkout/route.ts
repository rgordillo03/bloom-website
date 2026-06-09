import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const PRODUCTS = {
  solo: {
    name: 'Solo Bloom — Founding Edition',
    description: 'Your private mindfulness garden + bamboo NFC card',
    price: 2495, // €24.95 in cents
  },
  shared: {
    name: 'Shared Bloom — Founding Edition',
    description: 'Two bamboo NFC cards for shared reflection',
    price: 3995, // €39.95 in cents
  },
};

export async function POST(req: Request) {
  try {
    const { productId } = await req.json();
    const product = PRODUCTS[productId as keyof typeof PRODUCTS];

    if (!product) {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;

    // Graceful fallback if Stripe isn't configured yet (pre-launch mode)
    if (!stripeKey || stripeKey === 'sk_test_placeholder') {
      return NextResponse.json({
        error: 'Checkout is not yet active. We\'re currently in pre-launch — please join the waitlist at hello@trybloom.co'
      }, { status: 503 });
    }

    const stripe = new Stripe(stripeKey, { apiVersion: '2024-06-20' });

    const origin = req.headers.get('origin') || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'paypal', 'sepa_debit'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ['DE', 'AT', 'CH', 'NL', 'BE', 'FR', 'IT', 'ES', 'DK', 'SE', 'NO', 'FI', 'GB', 'IE', 'PL', 'CZ'],
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      metadata: { productId },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Checkout error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';

export default async function PricingPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  return (
    <>
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    <stripe-pricing-table pricing-table-id="prctbl_1QJoQVJ87ualnLXorSc5fJy3"
publishable-key="pk_live_51MnZW0J87ualnLXoou7TTiNYvK3u2JHmE51F18Pt7KKsAUCRangYHVHDR6Vz2U1JEjueIm0RVonGZXoAHJfRnQmZ00EDIlBwTg">
      </stripe-pricing-table>

    <Pricing
      user={user}
      products={products ?? []}
      subscription={subscription}
      />
      </>
  );
}

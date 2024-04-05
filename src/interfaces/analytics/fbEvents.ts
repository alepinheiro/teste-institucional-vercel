/**
 * # Interface para pixel do meta
 * https://developers.facebook.com/docs/meta-pixel/reference#standard-events
 */

type TrackingEvents =
  | 'AddPaymentInfo'
  | 'AddToCart'
  | 'AddToWishlist'
  | 'CompleteRegistration'
  | 'Contact'
  | 'CustomizeProduct'
  | 'Donate'
  | 'FindLocation'
  | 'InitiateCheckout'
  | 'Lead'
  | 'PageView'
  | 'Purchase'
  | 'Schedule'
  | 'Search'
  | 'StartTrial'
  | 'SubmitApplication'
  | 'Subscribe'
  | 'ViewContent'

type EventProps = {
  content_category: string
  content_ids: Array<string> | Array<number>
  content_name: string
  content_type: string
  contents: Array<{
    id: string
    quantity: number
  }>
  currency?: string
  num_items?: number
  predicted_ltv?: number
  search_string?: string
  status?: boolean
  value?: number
}

// Define a base interface for common FBQ methods
interface FBQBaseMethod {
  (method: string): void
}

// Specialized interfaces for typed methods
type ConsentMethod = FBQBaseMethod & {
  (method: 'consent', consent: 'revoke' | 'grant'): void
}

type InitMethod = FBQBaseMethod & {
  (method: 'init', pixelId: string): void
}

type TrackMethod = FBQBaseMethod & {
  (method: 'track', event: TrackingEvents): void
}

type TrackSingleMethod = FBQBaseMethod & {
  (
    method: 'trackSingle',
    pixelId: string,
    event: TrackingEvents,
    props?: Partial<EventProps>,
  ): void
}

export type FbEvents =
  | ConsentMethod
  | InitMethod
  | TrackMethod
  | TrackSingleMethod

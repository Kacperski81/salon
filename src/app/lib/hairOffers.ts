import hairOffers from "../data/hairOffers.json"

import type { HairOffer } from "../types";

export function getHairOffers(): HairOffer[] {
    return hairOffers;
}
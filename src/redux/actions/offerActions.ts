import {createAction} from '@reduxjs/toolkit';
import { OfferType } from '../../utils/types/OfferType';
import { NameSpace } from '../../utils/constants';

export const fetchCity = createAction<string>(`${NameSpace.City}/fetch`);
export const fetchOffers = createAction<OfferType[]>(`${NameSpace.Offers}/fetch`);
export const fetchOffer = createAction<OfferType['id']>(`${NameSpace.Offer}/fetch`);

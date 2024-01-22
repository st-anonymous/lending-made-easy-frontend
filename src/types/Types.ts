import store from '../data/store';

// STORE_TYPES
export type RootStateType = ReturnType<typeof store.getState>;

export type UserType =
  | {}
  | {
      user_id: string;
      user_phone: string;
      user_name: string;
      user_type: 'lender' | 'borrower';
      wallet_balance: number;
    };

export type OfferRequestType = {
  offer_request_id: string;
  offer_amount: number;
  lender_id: string;
  borrower_id: string;
  last_modified_time: Date;
  lender_approval: boolean;
  borrower_approval: boolean;
  offer_request_status: 'open' | 'accepted' | 'closed' | 'canceled';
};

export type OfferRequestsType = [] | OfferRequestType[];

export type TransactionType = {
  transaction_id: string;
  amount: number;
  lender_id: string;
  borrower_id: string;
  transaction_time: Date;
  transaction_status: 'success' | 'pending' | 'failed';
  offer_request_id: string;
};

export type TransactionsType = [] | TransactionType[];

// COMPONENT_TYPES
export type ButtonProps = {
  text: string;
  size: 'large' | 'medium' | 'small';
  type: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

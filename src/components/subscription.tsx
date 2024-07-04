// src/components/Subscription.tsx

import { FC } from "react";
import styles from "./subscription.scss?inline";

export interface ISubscriptionProps {
  username: string;
  shouldDisplayMentions?: boolean;
}

export const Subscription: FC<ISubscriptionProps> = ({
  username,
  shouldDisplayMentions,
}: ISubscriptionProps) => {
  console.log(document.body);
  console.log(document.getElementsByClassName("subscription"));
  return (
    <>
      <style>{styles}</style>
      <div className="subscription">
        <h2 className="subscription__title">Subscription</h2>
        <p className="subscription__greeting">Hello {username}!</p>

        <label htmlFor="email">
          <input
            id="email"
            type="email"
            className="subscription__input"
            placeholder="Enter your email"
          />
        </label>

        {shouldDisplayMentions && (
          <p className="subscription__mentions">
            My mention should be display here...
          </p>
        )}
      </div>
    </>
  );
};

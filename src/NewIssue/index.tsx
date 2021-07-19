import React from "react";
import { PrimaryBtn, SecondaryBtnOutline } from "../components/Button";
import { RouteComponentProps } from '@reach/router'

export const NewIssue = (props: RouteComponentProps) => {
  return (
    <div>
      <h1>New Issue</h1>
      <div style ={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 500
      }} >
        <input className="le-input" type="text" placeholder=" Issue Name" />
        <input className="le-input" type="text" placeholder=" Description" />
        <select className="le-select" name="priority" id="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select className="le-select" name="assignTo" id="assignTo">
          <option value="Ken Ijiwoye">Ken Ijiwoye</option>
          <option value="Bill Gates">Bill Gates</option>
          <option value="Tim Cook">Tim Cook</option>
        </select>
      </div>
      <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: 500
      }} >
          <PrimaryBtn text='CREATE' />
          <SecondaryBtnOutline text='CANCEL' />
      </div>
    </div>
  );
};

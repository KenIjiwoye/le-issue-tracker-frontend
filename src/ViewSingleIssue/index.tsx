import { Link, RouteComponentProps } from "@reach/router";
import React, { useState } from "react";
import {
  DangerBtn,
  PrimaryBtn,
  SecondaryBtn,
  SecondaryBtnOutline,
} from "../components/Button";
import "./index.css";

interface ViewSingleIssueProps extends RouteComponentProps {
  issueID?: string;
  issueName?: string;
  description?: string;
  priority?: string;
  assignTo?: string;
  status?: string;
}

export const ViewSingleIssue = (props: any) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const { id, issueName, assignTo, description, priority, status } =
    props.location.state;
  return (
    <div className="view-single-issue">
      <div style={{ maxWidth: 768 }}>
        <div>
          <p>Issue Name with ID# {id} </p>
          <h1>{issueName}</h1>
        </div>
        <div>
          <p>Priority</p>
          <h1>{priority}</h1>
        </div>
        <div>
          <p>Assigned To</p>
          <h1>{assignTo}</h1>
        </div>
        <div>
          <p>Status</p>
          <h1>{status}</h1>
        </div>
        <div>
          <h2>Description</h2>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <div style={{ textAlign: "right" }}>
          <p>Created by</p>
          <h1>Someone</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {/* <SecondaryBtnOutline
            text="GO BACK"
          /> */}
          <Link to='/' className='secondary-outline-btn' style={{textDecoration:'none'}} >GO BACK</Link>
          <PrimaryBtn text="CLOSE ISSUE" />
        </div>
        {(isAdmin || currentUser) && (
          <div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <SecondaryBtn text="EDIT" />
              <DangerBtn text="DELETE" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from "react";
import { TFooter } from "./TFooter";
import { THeader } from "./THeader";
import { TRow } from "./TRow";

export const Table = (props: any) => {
  const getIssues: any = props.issues;
  return (
    <table
      style={{
        width: "100%",
      }}
    >
      <THeader />
      {getIssues.map(
        (issue: {
            _id:string;
          issueName: string;
          priority: string;
          assignTo: string;
          createdAt: Date;
          status: string;
          description: string;
        }) => (
          <TRow
          id={issue._id}
            issueName={issue.issueName}
            priority={issue.priority}
            assignTo={issue.assignTo}
            date={issue.createdAt}
            status={issue.status}
            description={issue.description}
          />
        )
      )}
      {/* <TRow
        issueName="Fix Colors on Landing Page"
        priority="Low"
        assignTo="Ken I."
        date="July 18,2021"
      />
      <TRow
        issueName="Fix Colors on Landing Page"
        priority="Low"
        assignTo="Ken I."
        date="July 18,2021"
      /> */}
      <TFooter />
    </table>
  );
};

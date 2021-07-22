import React from "react";
import { PrimaryBtn, SecondaryBtnOutline } from "../components/Button";
import { RouteComponentProps, Link } from '@reach/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { MainContext, MainProvider } from "../Contexts/MainContext";

type Inputs = { 
  issueName: string,
  description?: string,
  priority: string,
  assignTo: string,
  // status: string,
  // issueDate: Date,
  // issueUpdated: Date
}

export const NewIssue = (props: RouteComponentProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  return (
   <MainProvider>
     <MainContext.Consumer>
       {context => {
         const onSubmit: SubmitHandler<Inputs> = data => context.addNewIssue(data);
         return(
          <div>
          <h1>New Issue</h1>
          <form onSubmit={handleSubmit(onSubmit)} style ={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 500
          }} >
            <input {...register("issueName", { required: true })} className="le-input" type="text" placeholder=" Issue Name" />
            <input {...register("description", { required: true })} className="le-input" type="text" placeholder=" Description" />
            <label>Priority:</label>
            <select {...register("priority", { required: true })} className="le-select" id="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <label>Assign To:</label>
            <select {...register("assignTo", { required: true })} className="le-select" name="assignTo" id="assignTo">
              <option value="Ken Ijiwoye">Ken Ijiwoye</option>
              <option value="Bill Gates">Bill Gates</option>
              <option value="Tim Cook">Tim Cook</option>
            </select>
            {errors.issueName && <span>Issue name field is required</span>}
           
          <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: 500
          }} >
              {/* <PrimaryBtn text='CREATE' /> */}
              <input type='submit' value='CREATE' className='primary-btn' />
              {/* <SecondaryBtnOutline text='CANCEL' /> */}
              <Link to='/' className='secondary-outline-btn' style={{textDecoration:'none'}}>CANCEL</Link>
          </div>
          </form>
        </div>
         )
       }}
     </MainContext.Consumer>
   </MainProvider>
  );
};

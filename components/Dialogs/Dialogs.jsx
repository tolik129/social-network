import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
	return (
				<div className={classes.dialog + ' ' + classes.active}>
					<NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
				</div>
	);
}
const Message = (props) => {
	return(
           <div className={classes.message}>{props.message}</div>
		);
}

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<DialogItem name="tolik" id="1" />
				<DialogItem name="tolik2" id="2" />
				<DialogItem name="tolik3" id="3" />
				<DialogItem name="tolik4" id="4" />
				<DialogItem name="tolik5" id="5" />
				<DialogItem name="tolik6" id="6" />


				
			</div>
			<div className={classes.messages}>
				<Message message="hi" />
				<Message message="hi23232" />
				<Message message="hi23232323" />
				
			
				
			</div>
		</div>
	)
}

export default Dialogs;
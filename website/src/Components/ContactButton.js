import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Snackbar from '@mui/material/Snackbar';
import Backdrop from '@mui/material/Backdrop';

export default function ContactButton({show}) {
	const [open, setOpen] = React.useState(false);
	const [speedDialOpen, setSpeedDialOpen] = React.useState(false)

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		return;
		}

		setOpen(false);
	};

	const handleSpeedDialOpen = () => {
		setSpeedDialOpen(true)
	}

	const handleSpeedDialClose = () => {
		setSpeedDialOpen(false)
	}

	const onEmailClick = (e) => {
		navigator.clipboard.writeText("wongkennan@gmail.com")
		handleClick()
		handleSpeedDialClose()
	} 

	const actions = [
		{ icon: <LinkedInIcon onClick={() => {window.open("https://www.linkedin.com/in/kennanw/")}}/>, name: 'My LinkedIn' },
		{ icon: <GitHubIcon onClick={() => {window.open("https://github.com/KennanWong")}}/>, name: 'My Github' },
		{ icon: <EmailIcon onClick={onEmailClick}/>, name: 'My Email' },
	  ];
	
	return (
		<>
			<Backdrop
				sx={{ color: '#fff', zIndex: '2'}}
				open={speedDialOpen}
				onClick={handleSpeedDialClose}
			/>
			<SpeedDial
				ariaLabel="SpeedDial basic example"
				sx={{ 
					position: 'fixed', 
					bottom: 20, 
					right: 20,
					opacity: show ? 1: 0,
					transition: 'all 0.2s ease-in-out'
				}}
				icon={<SpeedDialIcon icon={<ContactPageIcon/>} openIcon={<CloseIcon/>}/>}
				FabProps={{
					sx: {
					bgcolor: '#52796F',
					'&:hover': {
						bgcolor: '#52796F',
					},
					color: "#ECEBE4"
					}
				}}
				onOpen={handleSpeedDialOpen}
				onClose={handleSpeedDialClose}
				open={speedDialOpen}
			>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						tooltipOpen
						sx={{
							"& .MuiSpeedDialAction-staticTooltipLabel": {
							  	width: "8rem",
								fontFamily: 'monospace',
								color: '#1C1C1C'
							},
						  }}
					/>
				))}
			</SpeedDial>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				message="Copied my email to your clipboard :)."
			/>
		</>
	);
}
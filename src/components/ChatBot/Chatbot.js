import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import '../Modals/Ads.css'
const steps = [
	{
		id: '0',
		message: 'Hey Geek!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',

		// This message appears in
		// the bot chat bubble
		message: 'Please write your username',
		trigger: '2'
	}, {
		id: '2',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " hi {previousValue}, how can I help you?",
		trigger: 4
	}, {
		id: '4',
		options: [
			
			// When we need to show a number of
			// options to choose we create alist
			// like this
			{ value: 1, label: 'View Products' },
			{ value: 2, label: 'Read Articles' },

		],
	}
	
];

// Creating our own theme
const theme = {
	background: '#E3E6F3',
	headerBgColor: '#088178',
	headerColor:"#FFFF",
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: '#fff',
	botFontColor: 'white',
	userBubbleColor: 'white',
	userFontColor: 'black',
};

// Set some properties of the bot
const config = {
	botAvatar: "195.jpg",
	floating: true,
};

function Chat() {
	return (
		<div className="chaat" style={{color:"white"}}>
			<ThemeProvider theme={theme}>
				<ChatBot  

					// This appears as the header
					// text for the chat bot
					headerTitle="Chat With Us"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default Chat;

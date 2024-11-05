# MaxMah Studios

## Project Description

MaxMah Studios is an interactive web application designed to engage users through dynamic content and user-friendly features. The application allows users to log in, manage their preferences, and interact with various sections showcasing games, team members, and a contact form. With an emphasis on user experience, it provides functionalities like theme toggling, real-time greetings, and filtering options for better navigation.

## Key Features

- **User Authentication**: Users can log in by entering a username. The application remembers their session using `localStorage`, providing a seamless experience across page reloads.

- **Theme Toggling**: Users can switch between light and dark modes, with their preferences saved in `localStorage`. The application automatically applies the saved theme on load.

- **Dynamic Date and Time Display**: Users can display the current date and time at the click of a button, enhancing real-time interactivity.

- **User Greeting**: Users can input their names to receive a personalized greeting message, creating a welcoming atmosphere.

- **Contact and Feedback Forms**: Users can submit feedback or contact information through forms. Successful submissions display a confirmation message, and feedback can trigger a modal for further interaction.

- **Filter Settings**: Users can filter content based on categories and availability. The selected settings are saved in `localStorage`, allowing them to persist even after page refreshes.

## Managing User Preferences

User preferences such as login information, theme selection, and filter settings are managed using `localStorage`. This method provides a simple and effective way to maintain state across sessions:

- **Login Information**: The username is stored when the user logs in and cleared upon logout, ensuring privacy and security.

- **Theme Preference**: The application checks for a saved theme in `localStorage` and applies it upon loading. When the user toggles the theme, the preference is updated and stored for future visits.

- **Filter Settings**: When users adjust filters, the current settings are saved in `localStorage`. This ensures that the user’s preferences are respected and automatically applied when they revisit the application.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/maxmah-studios.git
   cd maxmah-studios
